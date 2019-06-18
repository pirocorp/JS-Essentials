function solve(row, col) {
    let result = [];
    let currentElement = 1;

    //Initialize Matrix
    for (let i = 0; i < row; i++) {
        result[i] = [];
    }

    for (let r = 0; r < row / 2; r++) {

        let end = col - r - 1;
        let start = 0 + r;

        for (let c = start; c <= end; c++) {
            
            if(c === end) {
                result[r][c] = currentElement++;
                right(result, r, end);
                bottom(result, r, end, start);
                left(result, r, start);
            } else {
                result[r][c] = currentElement++;
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(' '));        
    }

    function right(arr, row, end) {
        for (let r = row + 1; r < arr.length - row; r++) {
            arr[r][end] = currentElement++;
        }
    }

    function bottom(arr, row, end, start) {
        let lastRowIndex = arr.length - 1 - row;

        if(lastRowIndex < arr.length / 2) {
            return
        }

        let lastRow = arr[lastRowIndex];

        for (let i = end - 1; i >= start; i--) {
            lastRow[i] = currentElement++
        }
    }

    function left(arr, row, start){
        for (let i = arr.length - 2 - row; i > row ; i--) {
            arr[i][start] = currentElement++;            
        }
    }
}
solve(5, 4);