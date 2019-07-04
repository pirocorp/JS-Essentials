function solve() {
    const inputText = document.getElementById('text').value;
    const result = document.getElementById('result');

    const inputElements = inputText
        .split(' ')
        .filter(x => x !== '');

    let outputWord = '';

    for (const element of inputElements) {
        if(Number(element)) {
            outputWord += String.fromCharCode(element);
        } else {
            let charToNum = [];

            for (let i = 0; i < element.length; i++) {
                charToNum.push(element.charCodeAt(i))                
            }

            let pElement = document.createElement('p');
            pElement.textContent = charToNum.join(' ');
            result.appendChild(pElement);
        }
    }

    let pElement = document.createElement('p');
    pElement.textContent = outputWord;
    result.appendChild(pElement);
}