class Group { 
    constructor (){
        this.items = [];
    }

    add(elm){
        if (!this.has(elm)) this.items.push(elm);
    }

    delete(elm) {
        if (this.has(elm)) {
            let index = this.items.indexOf(elm);
            this.items.splice(index);
        }
    }

    has(elm){
        return this.items.includes(elm)
    }


    static from(iterable){
        let group = new Group();
        for (let elm of iterable) {
            group.add(elm);
        }

        return group;
    }

    toString(){
        return this.items;
    }
}

class PGroup extends Group { 
    add(item){
        if (this.has(item)){
            return PGroup.from(this.items);
        } else {
            return PGroup.from(this.items.concat(item));
        }
    }

    delete(item){
        let ind = this.items.indexOf(item);
        if (ind < 0){ 
            return PGroup.from(this.items);
        }else {
            let items = this.items.slice(0, ind).concat(this.items.slice(ind + 1));
            return PGroup.from(items); 
        }
    }

    static from(iterable){
        let pGroup = new PGroup();
        pGroup.items = Array.from(iterable);
        return pGroup;
    }
 }

let pg1 = PGroup.from("12345")
let pg2 = pg1.add("6")
let pg3 = pg2.delete("3")
console.log(pg1);
console.log(pg2);
console.log(pg3);