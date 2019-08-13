function coffeMachine(input) {
    let totalSum = 0;

    for (const order of input) {
        let price = 0.80;
        let [coins, drink, type, milk, sugar] = order.split(', ');
        
        if(drink === 'tea') {
            [coins, drink, milk, sugar] = order.split(', ');
        }

        if(!sugar) {
            sugar = milk;
        }

        if(order.includes('decaf')) {
            price += 0.10;
        }

        if(order.includes('milk')) {
            price += 0.10;
        }

        if(+sugar > 0) {
            price += 0.10;
        }

        let diff = coins - price;

        if(diff >= 0) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${diff.toFixed(2)}$`);
            totalSum += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(-1 * diff).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalSum.toFixed(2)}$`);
}
coffeMachine([  '1.00, coffee, caffeine, milk, 4', 
                '0.40, tea, 2',
                '1.00, coffee, decaf, 0']);