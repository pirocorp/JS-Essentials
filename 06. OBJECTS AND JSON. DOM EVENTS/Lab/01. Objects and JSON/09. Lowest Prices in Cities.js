function solve(array) {
    let products = new Map();

    for (const item of array) {
        const currentProductData = item.split(' | ').filter(x => x !== '');
        const town = currentProductData[0];
        const product = currentProductData[1];
        const price = Number(currentProductData[2]);

        if(!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price))
    }

    for (const [product, towns] of products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = '';

        for (const [town, price] of towns) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}

solve(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);