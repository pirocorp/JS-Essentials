function solve(number) {
    console.log('<table border="1">')

    let firstRow = generateRowData(number, "th", 1);

    console.log(`<tr><th>x</th>${firstRow}</tr>`);

    for (let currentRow = 1; currentRow <= number; currentRow++) {  
        let currentRowData = generateRowData(number, "td", currentRow);
        console.log(`<tr><th>${currentRow}</th>${currentRowData}</tr>`)   
    }

    console.log('</table>');

    function generateRowData(n, type, mult) {
        let rowData = '';

        for (let i = 1; i <= n; i++) {
            rowData += `<${type}>${i * mult}</${type}>`;
        }

        return rowData;
    }
}

solve(5);