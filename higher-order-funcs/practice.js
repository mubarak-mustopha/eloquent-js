function repeat(n, func){
    for (let i = 0; i<n; i++){
        func(i)
    }
}

function unless(test, then){
    if (!test) then();
}

repeat(4, console.log)

repeat(11, n => {
    unless(n % 2 == 1, () => console.log(`${n} is even`) )
})
