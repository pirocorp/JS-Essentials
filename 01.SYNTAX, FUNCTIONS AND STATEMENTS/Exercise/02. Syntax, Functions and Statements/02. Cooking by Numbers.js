/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let currentValue = +arr[0];

    for (let i = 1; i < arr.length; i++) {    
        let currentCommand = arr[i]; 
        currentValue = processCommand(currentCommand, currentValue);
        console.log(currentValue);
    }

    function processCommand(currentCommand, currentValue) {
        switch(currentCommand) {
            case "chop": return currentValue / 2;
            case "dice": return Math.sqrt(currentValue);
            case "spice": return ++currentValue;
            case "bake": return currentValue * 3;
            case "fillet": return currentValue * 0.8;
        }
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);