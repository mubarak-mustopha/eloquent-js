function printNumCowsAndChikens(numCows,numChikens){
    numCows = padStartWithZeroes(numCows);
    numChikens = padStartWithZeroes(numChikens);
    print(``)

}

function padStartWithZeroes(word){
    padded = String(word);
    while(padded.length < 3){
        padded = "0" + padded;
    }
    return padded
}

