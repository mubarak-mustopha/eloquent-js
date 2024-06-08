class List {
    constructor(value, rest){
        this.value = value;
        this.rest = rest;
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }

    static fromArray(array){
        let result = null;
        for (let i = array.length - 1 ; i >= 0 ; i-- ){
            result = new this(array[i], result);
        }
        return result;
    }
}

class ListIterator {
    constructor(list){
        this.list = list;
    }

    next() {
        if (this.list == null) return {done: true};
                
        let value = this.list.value;
        this.list = this.list.rest;
        return {value, done: false};    
    }
}

List.prototype[Symbol.iterator] = function() {
    return new ListIterator(this);
}

class LengthList extends List {
    #length; 

    constructor (value, rest) {
        super(value, rest);
        this.#length = super.length;
    }

    get length(){
        return this.#length;
    }
}

let list = List.fromArray([1,2,3,4])
for (let elm of list){
    console.log(elm);
}
console.log("Length:",LengthList.fromArray([1,2,4]).length);
console.log("LengthList prototype",Object.getPrototypeOf(LengthList));
console.log(LengthList.fromArray([4,5,3,8]) instanceof LengthList);
console.log(new LengthList(1, null) instanceof List);
console.log([] instanceof Array);
