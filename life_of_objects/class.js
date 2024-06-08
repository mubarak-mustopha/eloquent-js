class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit say '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer")

// console.log(typeof Rabbit);
// console.log(Rabbit.prototype == Object.getPrototypeOf(killerRabbit));
// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

module.exports = Rabbit;