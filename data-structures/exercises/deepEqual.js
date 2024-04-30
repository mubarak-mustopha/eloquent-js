function deepEqual(item1,item2){
    if ( typeof item1 != "object" || typeof item2 != "object" ){
        return item1 == item2;
    }
    if (Object.keys(item1).length != Object.keys(item2).length ){
        return false;
    }
    for (let key of Object.keys(item1)){
        if (!deepEqual( item1[key], item2[key] )){
            return false;
        }
    }
    return true;
}

let obj1 = {name:"Muby",dep:"SEN",level:200}
let obj2 = {name:"Muby",dep:"SEN",level:200}
let obj3 = {name:"Muby",dep:"SEN",level:200,lodge:"God's Mercy"}
let obj4 = {name:"Muby",dep:"SEN",level:200,address:"Rescue"}

console.log(deepEqual(2,2));
console.log(deepEqual(obj1,3));
console.log(deepEqual(obj1,obj2));
console.log(deepEqual(obj1,obj3));
console.log(deepEqual(obj3,obj4));