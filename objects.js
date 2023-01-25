let x = {
    1: "hi",
    "bob": 2
}

for(let y in x){
    console.log(y)
}

if(1 in x){
    console.log('1 is in x')
}


let map = new Map()

map["key"] = "value"

for(let foo in map){
    console.log(foo, map[foo])
}

if("key" in map){
    console.log("key is in map")
}

if("blah" in map){
    console.log("blah is in map")
}else{
    console.log("blah is not in map, adding it now")
    map["blah"] = 123
}


console.log(`blah's value in map: ${map["blah"]}`)

// indexing
let a = [1,2,3,4,5]
for(let i in a){
    console.log(a[i])
}

// values
let b = [5,4,3,2,1]
for(let j of b){
    console.log(j)
}

console.log(typeof null)
console.log(typeof undefined)


function factorial(n){
    if(n <= 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))
console.log(5*4*3*2*1)

let z = "This is a sentence with many characters in it."
function charFrequency(string){
    let map = new Map()
    for(let i in string){
        if(string[i] in map){
            map[string[i]] += 1
        }else{
            map[string[i]] = 1
        }
    }
    return map
}

const fool = charFrequency(z)
console.log(fool)