function solve(arr) {
    let specialSequence = [];

    for (let i = 0; i < arr.length; i++) {
        const startIndex = i;
        const endIndex = getSpecialSequence(startIndex, arr);
        
        if(startIndex !== endIndex) {
            i = endIndex;
            const currentSpecialSequence = arr.slice(startIndex, endIndex + 1);
            //console.log(currentSpecialSequence);

            if (currentSpecialSequence.length > specialSequence.length) {
                specialSequence = currentSpecialSequence;
            }
        }
    }

    function getSpecialSequence(startIndex, arr) {
        let lastIndex = startIndex;
        let lastElement = arr[startIndex];
        
        for (let i = startIndex + 1; i < arr.length; i++) {
            const currentElement = arr[i];

            if(currentElement === 0) {
                break;
            }
            
            if(Math.sign(lastElement) === Math.sign(currentElement)){
                break;
            }

            lastIndex = i;
            lastElement = currentElement;
        }

        return lastIndex;
    }

    if(specialSequence.length > 1) {
        console.log(`The longest sequence is ${specialSequence.join(', ')}`);
    } else {
        console.log(`In ${arr.join(', ')} no special sequence is found`);
    }
}
solve([1, -2, 1, -1, 2, 1, -1]);