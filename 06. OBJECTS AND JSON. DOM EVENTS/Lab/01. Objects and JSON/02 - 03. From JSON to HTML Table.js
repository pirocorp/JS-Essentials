function solve(inputString) {
    const arr = JSON.parse(inputString);
    const cellHeaders = Object.keys(arr[0]);    

    var result = '<table>\n'

    let firstRowElement = '  <tr>';

    for (let i = 0; i < cellHeaders.length; i++) {
        const currentCellHeader = cellHeaders[i];
        const currentThElement = `<th>${currentCellHeader}</th>`;
        firstRowElement += currentThElement;
    }

    firstRowElement += '</tr>\n';
    result += firstRowElement;

    for (let i = 0; i < arr.length; i++) {
        const currentRowValues = Object.values(arr[i]);

        let currentRow = '  <tr>';
        
        for (let i = 0; i < currentRowValues.length; i++) {
            const currentCellValue = currentRowValues[i];
            const currentCellElement = `<td>${escapeHtml(currentCellValue.toString())}</td>`;
            currentRow += currentCellElement;
        }

        currentRow += '</tr>\n';
        result += currentRow;
    }

    result += '</table>';
    console.log(result);

    /**
     * 
     * @param {String} unsafe 
     */
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');