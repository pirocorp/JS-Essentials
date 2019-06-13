function getNext() {
    let inputNumer = document.getElementById('num').value;
    let currentNumber = Number(inputNumer);

    let result = [];

    while(currentNumber !== 1) {
        result.push(currentNumber);

        if(currentNumber % 2 === 0) {
            currentNumber /= 2;
        } else {
            currentNumber = (3 * currentNumber) + 1;
        }
    }

    result.push(1);

    let resultElement = document.getElementById('result');
    //Last space when your solution beats the judge system
    resultElement.textContent = result.join(' ') + ' ';
}