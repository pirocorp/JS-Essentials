function solve(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const town = arr[i];
        const income = Number(arr[i + 1]);

        if(!result[town]) {
            result[town] = 0;
        }

        result[town] += income;
    }

    console.log(JSON.stringify(result));
}
solve(["Sofia",
20,
"Varna",
3,
"Sofia",
5,
"Varna",
4,
]);