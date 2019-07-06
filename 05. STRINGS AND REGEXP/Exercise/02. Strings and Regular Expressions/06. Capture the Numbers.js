function solve(arrOfStrings) {
    const numberRegex = /\d+/g;

    let result = [];

    for (let i = 0; i < arrOfStrings.length; i++) {
        const currentString = arrOfStrings[i];
        const matches = currentString.match(numberRegex);

        if(matches) {
            result = result.concat(Array.from(matches));
        }        
    }
    
    console.log(result.join(' '));
}
solve(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);