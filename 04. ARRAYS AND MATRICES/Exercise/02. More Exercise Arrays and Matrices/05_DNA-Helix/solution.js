function solve() {
    let inputElement = document.getElementById('num');
    let number = inputElement.value;

    let outputElement = document.getElementById('result');

    let sequence = 'ATCGTTAGGG';
    let sequenceGeneraotr = createSequenceGenerator(sequence);
    let patternGenerator = createPatternGenerator();

    for (let i = 0; i < number; i++) {
        let currentSquence = sequenceGeneraotr();
        let currentPattern = patternGenerator(currentSquence);

        let currentPatternPElement = document.createElement('p');
        currentPatternPElement.textContent = currentPattern;
        outputElement.appendChild(currentPatternPElement);
    }

    inputElement.value = '';

    function createPatternGenerator() {
        let patterns = [
            "**%CHAR1%%CHAR2%**",
            "*%CHAR1%--%CHAR2%*",
            "%CHAR1%----%CHAR2%",
            "*%CHAR1%--%CHAR2%*"
        ];
        let currentPatternIndex = 0;

        return function (currentSquence) {
            let values = { "%CHAR1%": currentSquence[0], "%CHAR2%": currentSquence[1] };
            let currentPattern = patterns[currentPatternIndex]
                .replace("%CHAR1%", values["%CHAR1%"])
                .replace("%CHAR2%", values["%CHAR2%"]);
            currentPatternIndex = (currentPatternIndex + 1) % patterns.length;

            return currentPattern;
        }
    }

    function createSequenceGenerator(string) {
        let sequence = string;
        let currentIndex = 0;

        return function () {
            let firstChar = sequence[currentIndex];
            let secondChar = sequence[currentIndex + 1];

            currentIndex = (currentIndex + 2) % sequence.length;

            return [firstChar, secondChar];
        }
    }
}