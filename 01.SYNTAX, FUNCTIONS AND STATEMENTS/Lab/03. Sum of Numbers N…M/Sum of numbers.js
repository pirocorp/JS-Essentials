function solve(n, m) {
    let num1 = Number(n);   //Parse numbers can be done with +n too
    let num2 = Number(m);   //Parse numbers can be done with +m too
    let result = 0;

    for(let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

console.log(solve('-8', '20'));