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


module.exports = {
    normalizeURL
}