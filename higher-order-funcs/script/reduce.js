const SCRIPTS = require("./scripts.js");

function reduce(array, combine, start){
    let current = start;
    for (const element of array) {
        current = combine(current,element);
    }
    return current;
}

function characterCount(script){
    
}

console.log(reduce([1,2,3,4,5,6,7], (a,b) => a + b, 0));
console.log(reduce([1,2,3,4,5,6,7], (a,b) => a * b, 1));
