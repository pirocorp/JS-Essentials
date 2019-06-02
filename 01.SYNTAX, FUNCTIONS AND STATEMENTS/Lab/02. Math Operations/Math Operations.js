function solve(num1, num2, operator) {
    var res = eval(`${num1} ${operator} ${num2}`);
    return res;
}

console.log(solve(5, 6, "*"));