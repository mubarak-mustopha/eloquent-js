function every(array, test){
    for (let elm of array){
        if (!test(elm)) return false;
    }
    return true;
}

console.log(every([2,4,8,16], n => n % 2 == 0));
console.log(every([7,3,8,9], n => n % 2 == 1));