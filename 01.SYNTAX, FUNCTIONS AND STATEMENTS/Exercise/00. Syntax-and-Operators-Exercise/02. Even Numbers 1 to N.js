function solve(n) {

    let number = Number(n); //+n;

    for (let i = 1; i <= number; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

solve(7);
