function unless(test, then) {
    if (!test) then();
}

function repeat(n, f){
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

function repeat(n,action){
    for (let i = 0;i < n;i++){
        action(i);
    }
}

repeat(3, n => {
    unless( n % 2 == 1, () => {
        console.log(n, "is even");
    } );
});


// let func = function (n) {
//     unless((n % 2) != 0, () => { console.log(n); })
// }