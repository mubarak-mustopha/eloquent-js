let length = Symbol("length")

Array.prototype[length] = 0;

// console.log([1,2].length);
// console.log([1,2][length]);

let myTrip = {
    length: 2,
    0: "Lankwitz",
    1: "Babelsberg",
    [length]: 21500
};

console.log(myTrip[length],myTrip.length);
