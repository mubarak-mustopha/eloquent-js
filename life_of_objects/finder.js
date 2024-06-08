let finder = {
    find(array){
        return array.some(v => v == this.value);
    },
    value: 5
}

console.log(finder.find([4,5]));