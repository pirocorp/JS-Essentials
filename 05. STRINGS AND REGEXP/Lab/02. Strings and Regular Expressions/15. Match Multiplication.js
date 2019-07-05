function solve(input) {
    const regex = / (-?\d+)\s*\*\s*(-?\d+(?:\.?\d+)?)/g;
    let match;

    while((match = regex.exec(input)) !== null) {
        const expression = match[0].trim();
        const expressionResult = evalExp(expression);

        input = input.replace(expression, expressionResult)

        /* console.log(expression);
        console.log(expressionResult);
        console.log(indexOfMatch); */
    }

    console.log(input);

    function evalExp(input) {
        let tokens = input
            .split('*')
            .map(x => x.trim())
        
        return Number(tokens[0]) * Number(tokens[1]);
    }
}
solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');