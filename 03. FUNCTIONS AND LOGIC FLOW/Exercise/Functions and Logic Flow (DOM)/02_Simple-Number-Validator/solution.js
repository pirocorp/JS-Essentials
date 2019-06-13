function validate() {
    let checkItButtonElement = document.querySelector('#exercise > fieldset > div > button');
    checkItButtonElement.addEventListener("click", onClickCheckItButtonEventHandler);

    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    let outputElement = document.getElementById('response');

    function onClickCheckItButtonEventHandler(e) {
        let inputElement = document.querySelector('#exercise fieldset div input[type=number]');
        let inputValue = inputElement.value;
        
        if (inputValue.length !== 10) {
            outputResponse('This number is NOT Valid!');
            return
        }

        let lastDigit = inputValue[inputValue.length - 1];
        let sum = 0;

        for (let i = 0; i < inputValue.length - 1; i++) {
            let currentInputElement = inputValue[i];
            let currentWeight = weights[i];
            let product = currentInputElement * currentWeight;
            sum += product;         
        }

        let reminder = sum % 11;

        if(reminder === 10) {
            reminder = 0;
        }

        if(reminder != lastDigit) {
            outputResponse('This number is NOT Valid!');
            return
        }

        outputResponse('This number is Valid!');
    }

    function outputResponse(responseString) {
        outputElement.textContent = responseString;
    }
}