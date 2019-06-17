function solve(n, k) {
    let result = [];
    result.push(1);

    for (let i = 1; i < n; i++) {
        let subArr = result.slice(-k);
        /* console.log(subArr); */

        let currentElement = subArr.reduce((a, c, i, ar) => a + c, 0);
        /* console.log(currentElement); */
        result.push(currentElement);
    }

    console.log(result.join(' '));
}
solve(8, 2);