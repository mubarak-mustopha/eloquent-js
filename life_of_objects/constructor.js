let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit say '${line}'`);
    }
}

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let blackRabbit = makeRabbit("black");
blackRabbit.speak("I am fear and darkness.")
