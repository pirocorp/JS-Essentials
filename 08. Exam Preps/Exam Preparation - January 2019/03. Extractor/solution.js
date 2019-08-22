function solve() {
    const extractButtonElement = document.getElementsByTagName('button')[0];
    extractButtonElement.addEventListener('click', extractData)
    
    function extractData() {
        const outputElement = document.getElementById('output');
        let inputString = document.getElementById('input').value;

        const digitRegex = /^\d+/;
        let regexResult = inputString.match(digitRegex)[0];

        inputString = inputString.substr(regexResult.length);
        regexResult = Number(regexResult);
        inputString = inputString.substr(0, regexResult);

        console.log(inputString);

        const lastCharacter = inputString[inputString.length -1];

        const inputTokens = inputString.split(lastCharacter);
        const removePattern = `[${inputTokens[0]}]`;
        const removeRegex = new RegExp(removePattern, 'g');
        const unprocessedString = inputTokens[1];

        let result = unprocessedString.replace(removeRegex, '');
        result = result.replace(/[#]/g, ' ');

        outputElement.value = result;
    }
}