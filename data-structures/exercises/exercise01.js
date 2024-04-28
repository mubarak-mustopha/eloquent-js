function range(start, end, step = 1){
    let array = [];
    if (step > 0){
        for (let i = start; i<=end ;i += step){
            array.push(i);
        }
    }else{
        for (let i = start; i>=end ;i += step){
            array.push(i);
        }
    }
    return array;
}

function sum(numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(range(0,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));