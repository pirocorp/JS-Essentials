/**
 * 
 * @param {String} fruit 
 * @param {Number} grams 
 * @param {Number} price 
 */
function solve(fruit, grams, price) {
    let kg = (grams / 1000);
    let total = kg * price;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35);