function solve(matrix) {
    let firstDiagonal = 0;
    let secondDIagonal = 0;

    let len = matrix.length - 1;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i]; 
        secondDIagonal += matrix[i][len - i];    
    }

    console.log(`${firstDiagonal} ${secondDIagonal}`)
}
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);