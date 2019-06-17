function solve(matrix) {
    let max = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        
        for (let col = 0; col < currentRow.length; col++) {
            let currentElement = currentRow[col];
            
            if(currentElement > max) {
                max = currentElement;
            }
        }
    }

    console.log(max);
}
solve([[20, 50, 10], [8, 33, 145]]);