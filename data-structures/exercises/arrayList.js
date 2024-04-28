function arrayToList(array){
    if (array.length == 1){
        return { value: array[0], rest: null };
    }
    return { value: array[0], rest: arrayToList(array.slice(1))}
}

function listToArray(list){
    if (list.rest == null){
        return [list.value];
    }
    return [list.value].concat(listToArray(list.rest));
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
            }
        }
};
let array = [4,5,6,7,8]

console.log(arrayToList(array));
console.log(listToArray(list));