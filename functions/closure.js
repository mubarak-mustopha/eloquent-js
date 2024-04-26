function wrapValue(n) {
    let local = n;
    return () => local;
}

function multiplier(factor){
    return n => factor * n; 
}

wrap1 = wrapValue(1);
wrap2 = wrapValue(2);

double = multiplier(2);
triple = multiplier(3);

console.log(wrap1());
console.log(wrap2());

console.log(double(9));
console.log(triple(20));