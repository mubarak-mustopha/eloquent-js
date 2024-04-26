function isEven (num) {
    num = Math.abs(num)
    if (num == 0){
        return true
    }else if(num == 1){
        return false
    }else {
        return isEven(num - 2)
    }
}

if (isEven(50)){
    console.log('50 is even.');
}else {
    console.log(("50 is odd."));
}