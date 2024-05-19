function loop(value, test, update, body){
    for(let i = value;;i = update(i)){
        if (!test(i)) break;
        body(i);
    }
}

loop(0, n => n < 5, n => n + 1, console.log);
