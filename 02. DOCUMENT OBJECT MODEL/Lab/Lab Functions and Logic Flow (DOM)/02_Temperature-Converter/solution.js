function solve() {
    let degreesElement = document.getElementById('num1');
    let degreesElementValue = Number(degreesElement.value);

    let degreesTypeElement = document.getElementById('type');
    let degreesTypeElementValue = degreesTypeElement.value.toLowerCase();

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (isNaN(degreesElement.value) || !degreesElement.value) {
        resultElement.innerHTML = "Error!";
        return
    }

    if (degreesTypeElementValue != 'fahrenheit' && degreesTypeElementValue != 'celsius') {
        resultElement.innerHTML = "Error!";
        return
    }

    let result = 0;

    if (degreesTypeElementValue === 'fahrenheit') {
        result = (degreesElementValue - 32) / 1.8;

    } else if (degreesTypeElementValue === 'celsius') {
        result = degreesElementValue * 1.8 + 32;
    }

    result = Math.round(result);

    resultElement.innerHTML = result;
}