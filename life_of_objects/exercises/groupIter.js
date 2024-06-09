const Group = require("./group.js");


class GroupIterator {
    #nextIndex
    #length
    constructor (group){
        this.items = group.items;
        this.#nextIndex = 0;
        this.#length = group.items.length;
    }

    next(){
        let currIndex = this.#nextIndex;
        if (currIndex > this.#length - 1){
            return {done: true};
        }else {
            this.#nextIndex = currIndex + 1;
            return {value: this.items[currIndex], done: false}
        }
    }
}


Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let group = Group.from("ABCDE");
console.log(group);

for (let item of group){
    console.log(item);
}