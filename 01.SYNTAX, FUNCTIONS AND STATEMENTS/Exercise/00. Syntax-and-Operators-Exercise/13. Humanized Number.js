/**
 * 
 * @param {String} input 
 */
function solve(input) {
    let regex = /\d+/g;
    let numbers = input.match(regex);   
    numbers = numbers.map(n => humanizeNumber(n)); 
    console.log(numbers.join('\n'));

    function humanizeNumber(n) {
        n = Number(n);

        if(n === 1) {
            return `${n}st`;
        }

        if(n === 2) {
            return `${n}nd`;
        }

        if (n === 3) {
            return `${n}rd`;
        }

        return `${n}th`;
    }
}

solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');