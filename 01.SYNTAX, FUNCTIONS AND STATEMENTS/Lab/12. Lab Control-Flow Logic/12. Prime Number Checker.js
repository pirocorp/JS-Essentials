function prime(n) {
    if (n <= 1) {
        console.log("false");
        return
    }

    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            console.log("false");
            return
        }      
    }

    console.log("true");
}

prime(-5);