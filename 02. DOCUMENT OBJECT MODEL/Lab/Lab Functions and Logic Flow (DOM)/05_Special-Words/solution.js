function solve() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if(!validateNumber(firstNumberElement) || !validateNumber(secondNumberElement)) {
        resultElement.innerHTML = 'Error...';
        return
    }

    let firstStringValue = document.getElementById('firstString').value;
    let secondStringValue = document.getElementById('secondString').value;
    let thirdStringValue = document.getElementById('thirdString').value;

    if(!validateString(firstStringValue) || !validateString(secondStringValue) || !validateString(thirdStringValue)) {
        resultElement.innerHTML = 'Error...';
        return
    }

    let firstNumberElementValue = Number(firstNumberElement.value);
    let secondNumberElementValue = Number(secondNumberElement.value);

    for (let i = firstNumberElementValue; i <= secondNumberElementValue; i++) {
        let currentNumber = i;
        let currentPElement = document.createElement('p');

        if(currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            currentPElement.innerHTML = `${currentNumber} ${firstStringValue}-${secondStringValue}-${thirdStringValue}`;
        } else if (currentNumber % 3 === 0) {
            currentPElement.innerHTML = `${currentNumber} ${secondStringValue}`;
        } else if (currentNumber % 5 === 0) {
            currentPElement.innerHTML = `${currentNumber} ${thirdStringValue}`;
        } else {
            currentPElement.innerHTML = `${currentNumber}`;
        }

        resultElement.appendChild(currentPElement);
    }

    function validateNumber(elemet) {
        if (isNaN(elemet.value.trim()) || !elemet.value.trim()) {
            return false;
        }

        return true;
    }

    function validateString(inputString) {
        if(inputString.trim().length === 0) {
            return false;
        }

        return true;
    }
}