const SCRIPTS = require("./scripts");

function map(array, transform){
    let transformed = []
    for (const element of array) {
        transformed.push(transform(element));
    }
    return transformed;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl")

console.log(map(rtlScripts, s => s.name));
