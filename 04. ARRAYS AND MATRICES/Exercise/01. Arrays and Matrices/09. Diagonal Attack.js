function solve(arrayOfStrings) {
    let matrix = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentRow = arrayOfStrings[i]
            .split(' ')
            .map(Number);
        matrix.push(currentRow);
    }

    let diag1Sum = 0;
    let diag2Sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        diag1Sum += matrix[i][i];
        diag2Sum += matrix[i][matrix.length - 1 - i];    
    }

    if(diag1Sum === diag2Sum) {

        for (let row = 0; row < matrix.length; row++) {                
                       
            for (let col = 0; col < matrix[row].length; col++) { 

                if(row === col || col === matrix.length - 1 - row) {
                    continue;
                }

                matrix[row][col] = diag1Sum;
            }
        }

        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }

    /**
     * 
     * @param {Array} matrix 
     */
    function printMatrix(matrix) {
        matrix.forEach(x => console.log(x.join(' ')));
    }
}
solve([ '005 003 012 003 001',
        '011 004 023 002 005',
        '101 012 003 021 010',
        '001 004 005 002 002',
        '005 022 033 011 001']
);