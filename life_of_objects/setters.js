class Temperature {
    constructor(celcius){
        this.celcius = celcius;
    }

    get fahrenheit(){
        return this.celcius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celcius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86
console.log(temp.celcius);


let boil = Temperature.fromFahrenheit(212);
console.log(boil.celcius);
