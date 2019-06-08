function solve() {
    let firstNumberInputElement = document.getElementById('num1');
    let firstNumberInputValue = Number(firstNumberInputElement.value);

    let secondNumberInputElement = document.getElementById('num2');
    let secondNumberInputValue = Number(secondNumberInputElement.value);

    let resultElement = document.getElementById('result');

    function validateInput(firstNumberInputValue, secondNumberInputValue) {
        if (firstNumberInputValue > secondNumberInputValue) {
            document.getElementById('result').innerHTML = "Try with other numbers.";
        }
    }

    function printTable(firstNumberInputValue, secondNumberInputValue) {
        for (let i = firstNumberInputValue; i <= secondNumberInputValue; i++) {        
            let result = secondNumberInputValue * i;
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${secondNumberInputValue} = ${result}`;
            resultElement.appendChild(p);
        }
    }

    resultElement.innerHTML = '';

    validateInput(firstNumberInputValue, secondNumberInputValue);
    printTable(firstNumberInputValue,secondNumberInputValue);
}