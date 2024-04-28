function city(object){
    return object.address?.city;
}

console.log(city({ address: { city: "Kano City"} }));
console.log(city({ name: "Vera"}));
console.log("string".toUpperCase?.());