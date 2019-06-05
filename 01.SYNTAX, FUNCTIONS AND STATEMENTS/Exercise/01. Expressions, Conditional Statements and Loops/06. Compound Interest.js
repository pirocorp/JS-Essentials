function solve(arr) {
    let principal = +arr[0];
    let interestRate = +arr[1] / 100;
    let compoumdingPeriot = +arr[2]; //months
    let compoundFrequency = (12 / compoumdingPeriot);
    let timespan = +arr[3]; //years

    let amount = principal * (1 + (interestRate / compoundFrequency)) ** (compoundFrequency * timespan);

    console.log(amount.toFixed(2));
}

solve([1500, 4.3, 3, 6]);