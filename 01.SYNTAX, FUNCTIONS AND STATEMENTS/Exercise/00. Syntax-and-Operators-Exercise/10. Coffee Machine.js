/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        const order = arr[i];
        let result = processOrder(order);
        console.log(result);
    }

    /**
     * 
     * @param {Array} input 
     */
    function processOrder(input) {
        input = input.split(", ")

        let credit = Number(input[0]);
        let product = input[1];

        let basePrice = 0;

        if (product === "coffee") {

            let typeOfCofee = input[2];
            
            if (typeOfCofee === "caffeine"){
                basePrice = 0.80;
            } else {
                basePrice = 0.90;
            }

            if (input.length > 4) {
                basePrice += Number((basePrice / 10).toFixed(1));
            }

        } else {
            basePrice = 0.80;

            if (input.length > 3) {
                basePrice += Number((basePrice / 10).toFixed(1));
            }
        }

        let sugar = Number(input[input.length - 1]);

        if(sugar > 0) {
            basePrice += 0.1;
        }

        let result = '';

        if(credit >= basePrice) {
            result = `You ordered ${product}. Price: ${basePrice.toFixed(2)}$ Change: ${(credit - basePrice).toFixed(2)}$`
        } else {
            result = `Not enough money for ${product}. Need ${(basePrice - credit).toFixed(2)}$ more`;
        }

        return result;
    }
}

solve(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);