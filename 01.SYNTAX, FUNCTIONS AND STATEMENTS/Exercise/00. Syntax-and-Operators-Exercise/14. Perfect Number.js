/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let perfectNumbers = [];

    for (let i = 0; i < arr.length; i++) {  
        let curentNumber = Number(arr[i]);
        
        if (isPerfext(curentNumber)) {
            perfectNumbers.push(curentNumber);
        }
    }

    if(perfectNumbers.length === 0) {
        console.log("No perfect number");
        return;
    }

    console.log(perfectNumbers.join(", "));

    function getDivisors(x) {
        let divisors = [];

        for (let i = 1; i <= x / 2; i++) {
            if(x % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    function isPerfext(n) {
        let divisors = getDivisors(n);
        let divisorsSum = divisors.reduce((a, b) => a + b, 0);

        if(divisorsSum === n) {
            return true;
        }

        return false;
    }
}

solve([5, 32, 82]);