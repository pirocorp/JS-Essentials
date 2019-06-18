function solve(arr) {
    let sum = arr[0].reduce((acc, c, i, arr) => acc += c, 0);
    
    for (let i = 0; i < arr.length; i++) {
        let currentRowSum = arr[i].reduce((acc, c, i, arr) => acc += c, 0);

        if(sum !== currentRowSum) {
            console.log(false);
            return
        }

        let currentColSum = getColSum(i, arr);

        if(sum !== currentColSum) {
            console.log(false);
            return
        }
    }

    console.log(true);

    function getColSum(col, arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            let currentCell = arr[i][col];
            sum += currentCell;
        }

        return sum;
    }
}   
solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);