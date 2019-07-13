function solve(inputString) {
    let objects = [];

    for (let i = 0; i < inputString.length; i++) {
        const currentObject = JSON.parse(inputString[i]);
        objects.push(currentObject);
    }

    prinTable(objects);

    function prinTable(objs){
        let result = '<table>\n';

        for (let i = 0; i < objs.length; i++) {
            const currentObj = objs[i];
            result += '  <tr>\n';
            for (const prop in currentObj) {
                result += `    <td>${currentObj[prop]}</td>\n`
            }
            result += '  </tr>\n';
        }

        result += '</table>';
        console.log(result);
    }
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);