function solve(arrStrings) {
    let cars = {};

    for (let i = 0; i < arrStrings.length; i++) {
        let [carBrand, carModel, producedCars] = arrStrings[i]
            .split(' | ')
            .filter(x => x !== '')
            .map(x => x.trim());

        producedCars = Number(producedCars);

        if(!cars[carBrand]) {
            cars[carBrand] = new Map();
        }
        
        if (cars[carBrand].get(carModel)) {
            producedCars += cars[carBrand].get(carModel);
        }

        cars[carBrand].set(carModel, producedCars);
    }

    for (const key in cars) {
        console.log(key);
        cars[key].forEach(logMapElements);
    }

    function logMapElements(value, key, map){
        console.log(`###${key} -> ${value}`);
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);