function solve(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let currentElementData = arr[i].split(" <-> ");
        let currentTown = currentElementData[0];
        let currentPopulation = parseInt(currentElementData[1]);

        if(!result[currentTown]) {
            result[currentTown] = 0
        }

        result[currentTown] += currentPopulation;
    }  

    for (const town in result) {
        console.log(`${town} : ${result[town]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',])

