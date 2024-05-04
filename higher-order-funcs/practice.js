function repeat(n, action){
    for (let i = 0;i < n;i++){
        action(i);
    }
}

function unless(test, then){
    if (!test){
        then();
    }
}

repeat(4,console.log)

unless( (82%2) == 1, () => console.log("It is even.") )

repeat(4, (n) => {
    unless( (n % 2) == 1, () => console.log(n))
})