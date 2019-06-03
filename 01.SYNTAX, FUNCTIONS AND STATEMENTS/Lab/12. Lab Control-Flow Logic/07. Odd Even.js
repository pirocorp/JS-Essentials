function oddOrEven(n) {
    if(n % 1 !== 0) {
        console.log("invalid")
        return;
    }

    if(n % 2 === 0) {
        console.log("even");
    } 

    if(n % 2 === 1 || n % 2 === -1) {
        console.log("odd");
    }
}

oddOrEven(2.0);