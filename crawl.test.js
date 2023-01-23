const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

// test normalizeURL
let urlsNormalizeTest = {
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
    ],

    "www.google.com/search": [
        "https://www.google.com/search?q=god+of+war+ragnarok&jkjkldjslf", 
        "https://www.google.com/search?q=banana", 
        "http://www.google.com/search?q=trees", 
        "https://www.google.com/search?q="
    ]
}

for(let ans of Object.keys(urlsNormalizeTest)){
    const testVals = urlsNormalizeTest[ans]
    for(let testVal of testVals){
        test(`normalize ${testVal}`, () => {
            expect(normalizeURL(testVal)).toBe(ans)
        })
    }
}

// test getURLsFromHTML
let urlsPullURLsFromHTMLTest = [
    // answer, testvals (htmlBody, baseURL)
    [["www.example.com/profile", "www.example.com/blog", "www.example.com/path"], ["<body>  <a href=\"/profile\">profile page</a> <a href=\"/blog\">blog page</a>    <a href=\"/path\">test path</a></body>", "www.example.com"]],
    [["https://google.com/search", "https://wikipedia.com", "https://apple.com", "https://intel.tech"], ["<body> <a href=\"https://google.com/search\">search google</a> <a href=\"https://wikipedia.com\">search wikipedia</a> <a href=\"https://apple.com\">apple products</a> <a href=\"https://intel.tech\">intel electronics</a> </body>", "www.somerandomblog.com"]]
]