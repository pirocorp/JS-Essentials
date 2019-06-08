function solve() {
    let stringElement = document.getElementById('string');
    let stringElementValue = stringElement.value;

    let characterElement = document.getElementById('character');
    let characterElementValue = characterElement.value;

    let resultElement = document.getElementById('result');

    resultElement.innerHTML = '';

    if(stringElementValue.length === 0 || characterElementValue.length !== 1) {
        resultElement.innerHTML = "Error."
        return;
    }

    let occurrences = findOccurrencesInString(stringElementValue, characterElementValue)
    
    if(occurrences % 2 === 1) {
        resultElement.innerHTML = `Count of ${characterElementValue} is odd.`;
    } else {
        resultElement.innerHTML = `Count of ${characterElementValue} is even.`;
    }

    function findOccurrencesInString(inputString, pattern) {
        let regex = new RegExp(pattern, 'g');
        let matches = inputString.match(regex);
        return matches.length;
    }
}