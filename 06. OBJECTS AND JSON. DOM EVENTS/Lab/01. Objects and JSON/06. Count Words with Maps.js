function solve(arr) {
    
    const regex = /\w+/gi;
    let result = new Map();

    let currentMatch;

    for (let i = 0; i < arr.length; i++) {
        const currentInput = arr[i].toLowerCase();
        
        while (currentMatch = regex.exec(currentInput)) {
            const currentWord = currentMatch[0];

            if (result.get(currentWord)) {
                let currentValue = result.get(currentWord);
                currentValue++;
                result.set(currentWord, currentValue);
            } else {
                result.set(currentWord, 1);
            }
        }
    }

    Array.from(result)
        .sort((a, b) => a[0].localeCompare(b))
        .forEach(x => console.log(`'${x[0]}' -> ${x[1]} times`));
    
}
solve(['Far too slow, you\'re far too slow.']);