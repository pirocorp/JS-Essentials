function solve(arr) {
    let currentNumber = 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];
        
        if(currentCommand === 'add') {
            result.push(currentNumber);
        } else if(currentCommand === 'remove') {
            result.pop(currentNumber);
        }

        currentNumber++;
    }

    if(result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
solve(['add', 'add', 'remove', 'add', 'add']);