function solve() {
    let inputNumber = Number(document.getElementById('num').value);
    let factors = [];
    factors.push(1);

    for (let i = 2; i <= inputNumber / 2; i++) {          
        if(inputNumber % i === 0) {
            factors.push(i);
        }
    }

    factors.push(inputNumber);

    let resultElement = document.getElementById('result');
    resultElement.textContent = factors.join(' ');
}