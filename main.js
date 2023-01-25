// const { normalizeURL } = require('./crawl.js')
// const { getURLsFromHTML } = require('./crawl.js')
const { crawlPage } = require('./crawl.js')

async function main(){    
    // read in url from command line args
    if (process.argv.length < 3 || process.argv.length > 3) {
        console.error("Usage: npm run start <url>")
        return 
    }
    
    const url = process.argv[2]
    console.log(`Crawling ${url}`)
    // try{
    //     // use fetch api to get the html body
    //     const response = await fetch(url)

    //     console.log(`Got status code: ${response.status}`)

    //     // console.log(response)


    //     // quit if we get a 404
    //     if (response.status === 404){
    //         console.error("got 404, try another url")
    //     }

    //     const htmlBody = await response.text()

    //     // get the html body
    //     // const htmlBody = JSON.stringify(response)

    //     // console.log(`htmlbody is ${htmlBody}`)


    //     const allURLsFromHTML = getURLsFromHTML(htmlBody, url)


    //     console.log(`got ${allURLsFromHTML.length} urls from ${url}:\n`)
    //     for(let tmp of allURLsFromHTML){
    //         console.log(tmp)
    //     }
    //     console.log("\nfinished crawling")
    // }catch(err){
    //     console.error(err)
    // }

    const pages = await crawlPage(url)

    console.log(pages)

}

main()