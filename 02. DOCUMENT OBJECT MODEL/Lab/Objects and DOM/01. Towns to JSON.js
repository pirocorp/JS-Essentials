/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let towns = [];
    let properties = readRow(arr[0]);
    
    for (let i = 1; i < arr.length; i++) { 
        let currentRowData = readRow(arr[i]);   
        let currenTown = {};

        for (let i = 0; i < properties.length; i++) {
            let currentProperty = properties[i];
            let currentValue = currentRowData[i];

            if(!isNaN(currentValue)){
                currentValue = Number(currentValue);
            }

            currenTown[currentProperty] = currentValue;           
        }

        towns.push(currenTown);
    }

    console.log(JSON.stringify(towns));

    function readRow(stringRow) {
        let result = stringRow
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim());

        return result;
    }
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);