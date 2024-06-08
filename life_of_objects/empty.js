let empty = {};

console.log(empty.toString);
console.log(empty.toString());


console.log(Object.getPrototypeOf(empty) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) == null);