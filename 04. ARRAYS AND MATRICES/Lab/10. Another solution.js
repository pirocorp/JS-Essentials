function solve(array) {
    let result = 0;

    for (let row = 0; row < array.length; row++) {

        let currentRow = array[row];

        for (let col = 0; col < currentRow.length; col++) {
            let currentElement = array[row][col];

            if (array[row][col + 1] && currentElement === array[row][col + 1]) {
                result++;
            }

            if (array[row + 1] && currentElement === array[row + 1][col]) {
                result++;
            }
        }
    }

    console.log(result);
}

solve([ [1, 2, 3],
        [4, 4, 6],
        [4, 8, 9],]
);