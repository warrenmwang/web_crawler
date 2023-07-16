function printReport(pages){
/*
* Takes pages (map) of urls and their frequency count on a website
* and pretty prints them to stdout
*/
    console.log("\nPrinting Report")

    const sortedLinks = sortDecreasingNumberOfReferences(pages)
    for(let [url, freq] of sortedLinks){
        console.log(`[${url}] was referenced [${freq}] ${freq > 1 ? 'times' : 'time'}`)
    }

    console.log("End of Report.\n")
}

function sortDecreasingNumberOfReferences(pages){
/*
* Sorts and returns an array of links in decreasing order of number of references
* pages - map
* returns sortedLinks - array
*/
    const sortedLinks = []
    for(let [url, freq] of pages){
        sortedLinks.push([url, freq])
    }
    sortedLinks.sort(secondColumnDescSort)
    return sortedLinks
}

function secondColumnDescSort(a, b){
/*
* sorting function used to sort matrix by second row for [url, freq]
* sorts in descending order (bigger first)
*/
    if(a[1] === b[1]){
        return 0
    }
    return (a[1] > b[1]) ? -1 : 1;
}

module.exports = {
    printReport
}