function countChar(string,char){
    let count = 0;
    for (let c of string){
        if (c == char) count++;
    }
    return count;
}

console.log(countChar("Btech Botany","B"));