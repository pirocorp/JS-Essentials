function solve(inputStrings) {
    let catalogue = new Map();

    for (const line of inputStrings) {
        let [productName, productPrice] = line.split(/\s*:\s*/).filter(t => t !== '').map(x => x.trim());
        catalogue.set(productName, productPrice);
    }

    const orderedCatalogue = Array.from(catalogue.keys()).sort((a, b) => sortCatalogue(a, b));
    let currentLetter = orderedCatalogue[0][0].toUpperCase();
    console.log(currentLetter);

    for (const key of orderedCatalogue) {
        if (currentLetter !== key[0].toUpperCase()){
            currentLetter = key[0].toUpperCase();
            console.log(currentLetter);
        }

        console.log(`  ${key}: ${catalogue.get(key)}`);
    }

    function sortCatalogue(a, b){
        return a.localeCompare(b);
    }
}
solve(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]
);