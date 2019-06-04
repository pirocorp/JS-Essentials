/**
 * 
 * @param {Number} amount 
 * @param {Array} coins 
 */
function solve(amount, coinsTypes) {
    coinsTypes = coinsTypes.sort(comparator);
    minCoinType = coinsTypes[coinsTypes.length - 1];
    let coins = [];

    while (amount > 0 && amount >= minCoinType) {
        for (let i = 0; i < coinsTypes.length; i++) {
            let currentCoinType = coinsTypes[i];

            if(amount - currentCoinType >= 0) {
                coins.push(currentCoinType);
                amount -= currentCoinType;
                break;
            }
        }
    }

    console.log(coins.join(", "))

    function comparator(a, b) {
        return b - a;
    }
}

solve(123, [5, 50, 2, 1, 10]);