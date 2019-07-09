function solve(inputString) {
    const regex = /\w+/g;
    let result = {};

    let currentMatch;

    while (currentMatch = regex.exec(inputString)) {
        const currentWord = currentMatch[0];
        
        if(result[currentWord]) {
            result[currentWord]++;
        } else {
            result[currentWord] = 1;
        }
    }

    console.log(JSON.stringify(result));
}
solve('Far too slow, you\'re far too slow.');