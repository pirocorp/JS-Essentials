function solve() {
    let inputString = document.getElementById('input').value;
    const resultElement = document.getElementById('resultOutput')

    const weight = getWeight(inputString);
    inputString = inputString.substring(weight, inputString.length - weight);
    const octets = inputString.match(/.{8}/g);
    const chars = octets
        .map(x => parseInt(x, 2))
        .map(x => String.fromCharCode(x));

    resultElement.textContent = chars.join('');

    function getWeight(string) {

        while(string.length > 1){
            let currentSum = 0;

            for (let i = 0; i < string.length; i++) {
                currentSum += Number(string[i]);                
            }

            string = currentSum.toString();
        }

        return Number(string);
    }
}