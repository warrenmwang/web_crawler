const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){    
    // read in url from command line args
    if (process.argv.length < 3 || process.argv.length > 3) {
        console.error("Usage: npm run start <url>")
        return 
    }
    
    const url = process.argv[2]
    console.log(`Crawling ${url}`)
    const pages = await crawlPage(url)

    printReport(pages)

}

main()