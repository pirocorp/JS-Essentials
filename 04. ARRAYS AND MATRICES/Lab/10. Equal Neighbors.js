function solve(array) {
    let result = 0;
    
    for (let row = 0; row < array.length; row++) {
        
        let currentRow = array[row];
        
        for (let col = 0; col < currentRow.length - 1; col++) {
            let currentElement = array[row][col];

            if(currentElement === array[row][col + 1]) {
                result++;
            }
        }
    }

    for (let row = 0; row < array.length -1; row++) {

        let currentRow = array[row];

        for (let col = 0; col < currentRow.length; col++) {
            let currentElement = array[row][col];
            
            if(currentElement === array[row + 1][col]) {
                result++;
            }
        }
    }   

    console.log(result);
}
solve([ [2,2,5,7,4],
        [4,0,5,3,4],
        [2,5,5,4,2],]
);