let data = [
    [1, 2, 3, 126],
    [4, 5, 6, 12, 13, 15, 18],
    [7, 8, 9, 20]
];

let newArr = data.reduce((p, c) => p.concat(c), []);
let sumOfElementOfArray = data.reduce(sum, 0);
//let sum = data.reduce((p, c) => p + c.reduce((x, y) => x + y, 0), 0);

function sum (p, c) {

    if (Array.isArray(c)) {
        return c.reduce(sum, p);
    }

    return p + c;
}

console.log(newArr);
console.log(sumOfElementOfArray);