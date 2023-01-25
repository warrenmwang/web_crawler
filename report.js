/*
* Takes pages (map) of urls and their frequency count on a website
* and pretty prints them to stdout
*/
function printReport(pages){
    console.log("\nPrinting Report")

    const sortedLinks = sortDecreasingNumberOfReferences(pages)
    for(let [url, freq] of sortedLinks){
        console.log(`[${url}] was referenced [${freq}] ${freq > 1 ? 'times' : 'time'}`)
    }

    console.log("End of Report.\n")
}

/*
* Sorts and returns an array of links in decreasing order of number of references
* pages - map
* returns sortedLinks - array
*/
function sortDecreasingNumberOfReferences(pages){
    const sortedLinks = []
    for(let [url, freq] of pages){
        sortedLinks.push([url, freq])
    }
    sortedLinks.sort(secondColumnDescSort)
    return sortedLinks
}

/*
* sorting function used to sort matrix by second row for [url, freq]
* sorts in descending order (bigger first)
*/
function secondColumnDescSort(a, b){
    if(a[1] === b[1]){
        return 0
    }
    return (a[1] > b[1]) ? -1 : 1;
}

module.exports = {
    printReport
}