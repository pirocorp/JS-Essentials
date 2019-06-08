function solve() {
    let stringElement = document.getElementById('string');
    let stringElementValue = stringElement.value;

    let resultElement = document.getElementById('result');
    let proccessedString = processString(stringElementValue);

    resultElement.innerHTML = proccessedString;
    console.log(proccessedString);
    
    function processString(inputString) {
        let currentUniqueCharacters = [];
        let resultString = '';

        for (let i = 0; i < inputString.length; i++) {
            let currentCharacter = inputString[i];

            if (currentCharacter === ' ') {
                resultString += currentCharacter;
            }

            if (!currentUniqueCharacters.includes(currentCharacter)) {
                currentUniqueCharacters.push(currentCharacter);
                resultString += currentCharacter;
            }
        }

        return resultString;
    }
}