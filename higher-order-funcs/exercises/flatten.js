function flatten(array){
    return array.reduce((a,b) => a.concat(b), []);
}

console.log(flatten([[1,4,6,7], [1,2,3], [8,2,9,0]]));
