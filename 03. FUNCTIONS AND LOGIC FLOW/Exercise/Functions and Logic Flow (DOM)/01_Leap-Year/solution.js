function leapYear() {
    let checkButtonElement = document.querySelector('#exercise button')
    checkButtonElement.addEventListener("click", onClickCheckButtonEventHandler);

    function onClickCheckButtonEventHandler(e) {
        let inputElement = document.querySelector('#exercise input[type=number]');
        let inputValue = inputElement.value;

        if (!inputValue) {
            return;
        }

        let inputYear = parseInt(inputValue);

        let resultElement = document.querySelector('#year h2');
        let yearElement = document.querySelector('#year div');

        let resultString = '';

        if (isLeapYear(inputYear)) {
            resultString = 'Leap Year';
        } else {
            resultString = 'Not Leap Year';
        }

        resultElement.textContent = resultString;
        yearElement.textContent = inputYear;

        inputElement.value = '';
    }

    function isLeapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
}