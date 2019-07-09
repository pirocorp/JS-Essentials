function solve(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        const currentData = arr[i].split(' <-> ');
        const town = currentData[0];
        const population = Number(currentData[1]);

        if(!result[town]) {
            result[town] = population;
        } else {
            result[town] += population;
        }        
    }

    for (const key in result) {
        const value = result[key];
        console.log(`${key} : ${value}`);
    }
}
solve([ "Sofia <-> 1200000",
        "Montana <-> 20000",
        "New York <-> 10000000",
        "Washington <-> 2345000",
        "Las Vegas <-> 1000000",
]);