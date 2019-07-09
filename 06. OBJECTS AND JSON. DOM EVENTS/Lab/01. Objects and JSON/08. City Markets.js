function solve(array) {
    /* {
        TownName: {
            ProductName: TotalAmount
        }
    } */

    let towns = {};

    for (let i = 0; i < array.length; i++) {
        const currentData = array[i]
            .split(' -> ')
            .map(x => x.trim());
        
        const currentTown = currentData[0];
        const currentProduct = currentData[1];

        const totalAmountData = currentData[2]
            .split(' : ')
            .map(x => x.trim());
        
        const amountOfSales = totalAmountData[0];
        const pricePerUnit = totalAmountData[1];

        const totalAmount = amountOfSales * pricePerUnit;
        
        if(!towns[currentTown]) {
            towns[currentTown] = {};
        }

        towns[currentTown][currentProduct] = totalAmount;
    }

    for (const townName in towns) {
        const products = towns[townName];

        console.log(`Town - ${townName}`);

        for (const productName in products) {
            const productTotalIncome = products[productName];

            console.log(`\$\$\$${productName} : ${productTotalIncome}`);
        }
    }
}
solve([ "Sofia -> Laptops HP -> 200 : 2000",
        "Sofia -> Raspberry -> 200000 : 1500",
        "Sofia -> Audi Q7 -> 200 : 100000",
        "Montana -> Portokals -> 200000 : 1",
        "Montana -> Qgodas -> 20000 : 0.2",
        "Montana -> Chereshas -> 1000 : 0.3",
]);