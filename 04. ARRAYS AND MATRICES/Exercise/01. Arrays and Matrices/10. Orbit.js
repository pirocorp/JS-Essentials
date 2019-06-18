function solve(arr) {
    let rows = Number(arr[0]);
    let cols = Number(arr[1]);

    let inputRowIndex = Number(arr[2]);
    let inputColIndex = Number(arr[3]);

    let currentLevel = 1;

    let result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];        
    }

    result[inputRowIndex][inputColIndex] = currentLevel++;
    let modifier = 1;

    while (modifier < Math.max(rows, cols)) {
        let startRowIndex = Math.max(0, inputRowIndex - modifier);
        let endRowIndex = Math.min(rows - 1, inputRowIndex + modifier);

        let startColIndex = Math.max(0, inputColIndex - modifier);
        let endColIndex = Math.min(cols - 1, inputColIndex + modifier);

        for (let row = startRowIndex; row <= endRowIndex; row++) {
                        
            for (let col = startColIndex; col <= endColIndex; col++) {
                let currentElement = result[row][col];
                
                if(!currentElement) {
                    result[row][col] = currentLevel;
                }
            }
        }

        currentLevel++;
        modifier++;
    }

    result.forEach(x => console.log(x.join(' ')));
}
solve([5, 5, 4, 2]);