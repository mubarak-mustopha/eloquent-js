function max(...numbers){
    let result = -Infinity;
    for (let number of numbers){
        if (number > result) result = number;
    }
    return result;
}

let numbers = [5,1,7];
console.log(max(...numbers));