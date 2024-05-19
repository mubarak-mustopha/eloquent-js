const SCRIPTS = require("./scripts");

function avg(array){
    return array.reduce((a,b) => a + b) / array.length;
}

console.log(
    avg(SCRIPTS.filter(s => s.living).map(s => s.year))
);

console.log(
    avg(SCRIPTS.filter(s => !s.living).map(s => s.year))
);
