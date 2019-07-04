function solve() {
    const inputText = document.getElementById('text').value;
    const currentCase = document.getElementById('naming-convention').value;

    let result = inputText
        .split(' ')
        .filter(x => x)
        .map(x => x[0].toUpperCase() + x.substring(1).toLowerCase())
        .join('');

    if (currentCase === 'Camel Case'){
        result = result[0].toLowerCase() + result.substring(1);
    }

    if (currentCase !== 'Camel Case' && currentCase !== 'Pascal Case') {
        result = 'Error!';
    }
    
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}