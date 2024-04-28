function reverseArray(array){
    let reversed = [];
    for (let item of array){
        reversed.unshift(item);
    }
    return reversed;
}

function reverseArrayInPlace(array){
    let arrayCopy = array.slice();
    let lastIndex = arrayCopy.length - 1;
    for (let i = 0;i < arrayCopy.length;i++){
        array[lastIndex - i] = arrayCopy[i];
    }
}

let numbers = [9,8,7,6,5];
console.log(reverseArray([1,2,3,4,5]));
reverseArrayInPlace(numbers);
console.log(numbers);