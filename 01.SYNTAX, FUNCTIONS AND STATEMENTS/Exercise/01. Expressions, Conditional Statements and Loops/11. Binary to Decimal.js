/**
 * 
 * @param {String} input 
 */
function solve(input){
    input = input.split("");
    input = input.reverse();

    let dec = 0;
    
    for (let i = 0; i < input.length; i++) {
        let currentDigit = +input[i];

        if(currentDigit === 1) {
            dec += 2 ** i;
        }
    }

    console.log(dec);
}

solve('11110000');