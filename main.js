const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){    
    // read in url and saveHTML bool from command line args
    if (process.argv.length < 4 || process.argv.length > 4) {
        console.error("Usage: npm run start <url>")
        return 
    }
    
    const url = process.argv[2]
    const saveHTML = process.argv[3].toLowerCase() === 'true'
    console.log(`Crawling ${url}`)
    const pages = await crawlPage(url, undefined, undefined, saveHTML)

    printReport(pages)

}

main()