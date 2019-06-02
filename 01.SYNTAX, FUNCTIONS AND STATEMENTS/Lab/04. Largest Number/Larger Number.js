function solve(num1, num2, num3) {

    let max = maxNumber(num1, num2, num3);

    console.log(`The largest number is ${max}.`);

    function maxNumber(num1, num2, num3) {
        return Math.max(Math.max(num1, num2), num3)
    }
}

solve(-3, -5, -22.5);