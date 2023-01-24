const { JSDOM } = require("jsdom")

/*
* normalizes a url
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

module.exports = {
    normalizeURL,
    getURLsFromHTML
}

