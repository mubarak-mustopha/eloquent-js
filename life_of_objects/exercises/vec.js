class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other){
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length(){
        return Math.sqrt( (this.x * this.x) + (this.y * this.y) );
    }
}

let vecA = new Vec(3,4);
let vecB = new Vec(5,8);
let vecC = vecA.add(vecB);
let vecD = vecB.minus(vecA)
console.log(vecC, vecD);
console.log(vecA.length);
