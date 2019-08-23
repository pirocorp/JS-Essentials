function solve(budget, concrete, discount) {
    const prices = {
        gravel: 0.5,
        sand: 0.2,
        cement: 1.1,
    };

    const incridients = {
        gravel: 1200,
        sand: 750,
        cement: 300,
    }

    const amounts = {
        gravel: 0,
        sand: 0,
        cement: 0,
        subTotal: function() {
            return this.gravel + this.sand + this.cement;
        },        
        total: function(discount) {
            const subTotal = this.subTotal();

            if(subTotal > 1000){
                discount = (100 - discount) / 100;
                return subTotal * discount;
            }

            return subTotal;
        },
    }

    for (const key in incridients) {
        incridients[key] *= concrete;
    }

    for (const key in incridients) {
        amounts[key] = incridients[key] * prices[key];
    }

    if (amounts.total(discount) > budget) {
        const result = amounts.total(discount) - budget;
        console.log(`You can't buy all these things! You need ${result.toFixed(2)} BGN more`);
        return;
    }

    console.log(`The price without discount is ${amounts.subTotal().toFixed(2)} BGN`);
    console.log(`Gravel: ${amounts.gravel.toFixed(2)} BGN`);
    console.log(`Sand: ${amounts.sand.toFixed(2)} BGN`);
    console.log(`Cement: ${amounts.cement.toFixed(2)} BGN`);

    if(amounts.subTotal() > 1000) {
        console.log(`The price with discount is ${amounts.total(discount).toFixed(2)} BGN `);
    }
}
solve(1500, 0.5, 10);