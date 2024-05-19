function every(array, test){
    return !array.some(elm => !test(elm));
}


console.log(every([2,4,8,16], n => n % 2 == 0));
console.log(every([7,3,8,9], n => n % 2 == 1));
console.log(every([7,3,81,9], n => n % 2 == 1));