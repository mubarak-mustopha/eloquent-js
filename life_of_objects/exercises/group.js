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

function test() {
    let group = new Group();
    group.add("Muby");
    group.add("Sett");
    group.add("Ayo");
    group.add("Muby");
    console.log(group.has("Chris"));
    console.log(group);
    console.log(Group.from(["A","B","C"]));
}


module.exports = Group;