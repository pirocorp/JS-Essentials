function greatestCD() {
    let num1Element = document.getElementById('num1');
    let num2Element = document.getElementById('num2');

    let num1Value = num1Element.value;
    let num2Value = num2Element.value;

    let min = Math.min(Math.abs(num1Value), Math.abs(num2Value));
    let max = Math.max(Math.abs(num1Value), Math.abs(num2Value));

    let resultElement = document.getElementById('result');

    if(min === 0) {
        resultElement.textContent = max;
        return
    }

    let gcd = 1;

    for (let i = 2; i <= min; i++) {
        if(min % i === 0 && max % i === 0) {
            gcd = i;            
        }
    }

    resultElement.textContent = gcd;
}