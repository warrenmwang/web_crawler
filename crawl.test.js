const { normalizeURL } = require('./crawl.js')

let urlsToTest = 
{
    "wagslane.dev/path": [
        "https://wagslane.dev/path/",
        "https://wagsLane.Dev/path",
        "https://wagslane.dev/path",
        "http://wagslane.dev/path"
    ], 

    "google.com": [
        "https://google.com",
        "https://google.com/",
        "http://google.com/",
        "http://google.com", 
    ]
}

for(let ans of Object.keys(urlsToTest)){
    const testVals = urlsToTest[ans]

    for(let testVal of testVals){
        test(`normalize ${testVal}`, () => {
            expect(normalizeURL(testVal)).toBe(ans)
        })
    }
}