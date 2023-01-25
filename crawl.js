const { JSDOM } = require("jsdom")

/*
* normalizes a url
* url - String
* returns a normalized url - String
*/
function normalizeURL(url) {
    try{
        const newURL = new URL(url)
        // return just the hostname and path, no trailing forward slash
        let retVal = `${newURL.hostname}${newURL.pathname}`
        if (retVal[retVal.length-1] === '/') {
            return retVal.slice(0, -1)
        }
        return retVal

    }catch(err){
        console.error(err)
    }
}

/*
* returns a list of un-normalized urls found in the htmlbody
* baseURL is used in case we stumble upon relative URLs to other pages on the same website, so we can construct
* the absolute URL
* htmlBody - String
* baseURL - String
* returns a list of urls - Array of Strings
*/
function getURLsFromHTML(htmlBody, baseURL){
    const dom = new JSDOM(htmlBody)
    const aTags = dom.window.document.querySelectorAll('a')

    // parse thru the a tags and construct the urls...
    let urls = []
    for(let aTag of aTags){
        urls.push(aTag.href)
    }

    // if urls are relative, construct the absolute url using baseURL
    let absoluteURLs = []
    for(let url of urls){
        try{
            // succeeds only if url is absolute
            const newURL = new URL(url)
            absoluteURLs.push(url)
        }catch(err){
            // if we get here, the url is relative, assuming no trailling slash at the end of baseURL
            const newURL = baseURL + url
            absoluteURLs.push(newURL)
        }
    }

    return absoluteURLs
}

/*
* crawls a page and returns the html body
* recursively traverses all the links that are apart of the base_url website 
* baseURL - String
* currURL - String
* pages - object to keep track of pages we've already crawled
* other params optional
* returns html body - String
*/
async function crawlPage(baseURL, currURL, pages){
    // use base_url if curr_url is empty (starting point) (confirmed to be working)
    if (currURL === undefined){
        currURL = baseURL
    }

    // initial pages if undefined (confirmed to be working)
    if (pages === undefined){
        pages = new Map()
    }

    // return pages if current_url is not apart of base_url
    if(!currURL.includes(baseURL)){
        return pages
    }
    
    
    // add to pages the current url if not existing, else increment counter
    const normalizedCurrURL = normalizeURL(currURL)
    if (pages.has(normalizedCurrURL)){
        pages.set(normalizedCurrURL, pages.get(normalizedCurrURL) + 1)
        return pages
    }

    // if we get here, this curr_url is a new url that has not been traversed yet
    pages.set(normalizedCurrURL, 1)

    // making a request 
    console.log(`Requesting ${currURL}`)

    const response = await fetch(currURL)

    // quit if we get a 404
    if (response.status === 404){
        console.error("got 404, page not found")
        return pages
    }

    // if we get a non-html response, quit
    if (!response.headers.get("content-type").includes("text/html")){
        console.error(`got non-html content for url: ${currURL}`)
        return pages
    }

    // get all urls from htmlbody, recursively traverse them
    const htmlBody = await response.text()
    const allURLsFromHTML = getURLsFromHTML(htmlBody, baseURL)
    for(let new_url of allURLsFromHTML){
        pages = await crawlPage(baseURL, new_url, pages)
    }
    
    return pages
}

module.exports = {
    normalizeURL,getURLsFromHTML,crawlPage
}

