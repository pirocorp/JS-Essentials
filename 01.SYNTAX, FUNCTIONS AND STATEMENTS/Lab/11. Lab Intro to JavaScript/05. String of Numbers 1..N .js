function solve(n) {
    let result = '1';
    for (let i = 2; i <= n; i++) {
        result += i;      
    }

    console.log(result);
}

solve(11);