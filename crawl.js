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

}

module.exports = {
    normalizeURL
}