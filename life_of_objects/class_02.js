function ArchaicRabbit(type){
    this.type = type;
}

ArchaicRabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit say '${line}'`);
}

let oldSchoolRabbit = new ArchaicRabbit("old school");