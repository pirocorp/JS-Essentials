function solve() {
    let firstMatrixData = document.getElementById('mat1').value.trim();
    let secondMatrixData = document.getElementById('mat2').value.trim();

    let matrix1 = readMatrixFromString(firstMatrixData);
    let matrix2 = readMatrixFromString(secondMatrixData);

    /* console.log(matrix1);
    console.log(matrix2); */

    let result = dotProduct(matrix1, matrix2);
    let resultElement = document.getElementById('result');

    for (let i = 0; i < result.length; i++) {
        let currentPElement = document.createElement('p'); 
        currentPElement.textContent = result[i].join(', ');
        resultElement.appendChild(currentPElement);       
    }

    function readMatrixFromString(inputString) {
        let inputData = inputString
            .substring(2, inputString.length - 2)
            .split('], [');

        let matrix = [];

        for (let i = 0; i < inputData.length; i++) {
            let currentRow = inputData[i].split(', ').map(Number)
            matrix.push(currentRow);
        }

        return matrix; 
    }

    function dotProduct(matrix1, matrix2) {
        let result = [];

        for (let i = 0; i < matrix1.length; i++) {
            let currentRow = matrix1[i];
            let resultRow = [];

            for (let j = 0; j < matrix2.length; j++) {
                let currentCol = matrix2[j];

                let currentProduct = productOfArray(currentRow, currentCol);
                resultRow.push(currentProduct);
            }

            result.push(resultRow);
        }

        return result;
    }

    function productOfArray(arr1, arr2) {
        let sum = 0;

        for (let i = 0; i < arr1.length; i++) {
            sum += arr1[i] * arr2[i];
        }

        return sum;
    }
}