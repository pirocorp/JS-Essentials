function solve(inputArr) {
    let towns = [];
    let income = 0;

    for (let i = 0; i < inputArr.length; i++) {
        const currentElement = inputArr[i];
        const tokens = currentElement
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim());

        for (let j = 0; j < tokens.length; j++) {
            const currentToken = tokens[j];
            
            if(Number(currentToken)) {
                income += Number(currentToken);
            } else {
                towns.push(currentToken);
            }
        }
    }

    console.log(towns.join(', '));
    console.log(income);
}
solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);