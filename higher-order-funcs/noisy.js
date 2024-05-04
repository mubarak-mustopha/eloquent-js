function noisy(f){
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    }
}

noisy(Math.min)(14,2,9)
