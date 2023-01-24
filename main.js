const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

function main(){    
    // read in url from command line args
    if (process.argv.length < 3 || process.argv.length > 3) {
        console.error("Usage: npm run start <url>")
        process.exit(1)
    }
    
    const url = process.argv[2]
    console.log(`Crawling ${url}`)
    // const linksFromURL = getURLsFromHTML(

}

main()