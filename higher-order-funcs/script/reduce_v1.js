const SCRIPTS = require("./scripts.js");

function reduce(array, combine, start){
    current = start;
    for (const element of array) {
        final = combine(current,element);
    }
    return final;
}

function characterCount(script){
    return script.ranges.reduce((count,[from, to]) => {
        return count + (to - from);
    },0)
}


console.log(SCRIPTS.reduce((a , b) => {
    return (characterCount(a) > characterCount(b)) ? a : b;
}));

// console.log(reduce([1,2,3,4,5], (a , b) => a * b, 1));
