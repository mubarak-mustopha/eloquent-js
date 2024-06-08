function speak(line) {
    console.log(`This ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak}
let blackRabbit = {type: "black", speak}


whiteRabbit.speak("Oh my fur and whiskers")
hungryRabbit.speak("Got any carrots?")
speak.call(blackRabbit, "Hurry")