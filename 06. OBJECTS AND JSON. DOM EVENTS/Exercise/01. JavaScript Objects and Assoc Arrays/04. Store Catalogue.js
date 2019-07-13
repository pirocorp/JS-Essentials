function solve(inputStrings) {
    let products = [];
    
    for (let i = 0; i < inputStrings.length; i++) {
        let [productName, productPrice] = inputStrings[i]
            .split(' : ')
            .filter(x => x !== '')
            .map(x => x.trim());

        productPrice = Number(productPrice);

        const currentProduct = {
            name: productName,
            price: productPrice
        }

        products.push(currentProduct);
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = products[0].name[0].toUpperCase();
    console.log(currentLetter);

    for (let i = 0; i < products.length; i++) {
        const currentProduct = products[i];

        if (currentLetter !== currentProduct.name[0].toUpperCase()){
            currentLetter = currentProduct.name[0].toUpperCase();
            console.log(currentLetter);
        }

        console.log(` ${currentProduct.name}: ${currentProduct.price}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);