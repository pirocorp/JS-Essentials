function solve(num1, num2, operand) {
    let num1Type = typeof(num1);
    let num2Type = typeof(num2);
    let operandType = typeof(operand);

    if(num1Type !== "number" || num2Type !== "number" || operandType !== "string") {
        console.log("error");
        return;
    }

    var func = operation(operand);
    console.log(func(num1, num2))

    function operation(operator) {
        let result = {};
        switch (operator) {
            case '+': result = (num1, num2) => { return num1 + num2 }; break;
            case '-': result = (num1, num2) => { return num1 - num2 }; break;
            case '*': result = (num1, num2) => { return num1 * num2 }; break;
            case '/': result = (num1, num2) => { return num1 / num2 }; break;
            case '%': result = (num1, num2) => { return num1 % num2 }; break;
            case '**': result = (num1, num2) => { return num1 ** num2 }; break;
            default: result = (num1, num2) => { return "error" }; break;
        }

        return result;
    }
}

solve(2, 4, '+');