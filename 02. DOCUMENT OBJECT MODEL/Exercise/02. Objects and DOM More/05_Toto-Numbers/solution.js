function solve() {

    let getMyNumbersButtonElement = document.getElementsByTagName('button')[0];
    getMyNumbersButtonElement.addEventListener("click", onClickGetMyNumbersButtonEventHandler);

    function onClickGetMyNumbersButtonEventHandler(e) {
        let inputNumbersElement = document.querySelector('#myNumbers input');
        let inputNumbersValue = inputNumbersElement.value;

        if(!inputNumbersValue) {
            return
        }

        let inputNumbers = inputNumbersValue
            .split(' ')
            .filter(x => x)
            .map(Number);

        if(inputNumbers.length !== 6) {
            return
        }

        if (inputNumbers.some(x => !checkNumber(x))) {
            return
        }

        if(inputNumbers.length !== inputNumbers.filter(distinct).length) {
            return
        }

        let allNumbersElement = document.getElementById('allNumbers');

        for (let i = 1; i <= 49; i++) {
            let currentElement = document.createElement('div');
            currentElement.textContent = `${i}`;
            currentElement.classList.add("numbers");

            if(inputNumbers.some(x => x === i)) {
                currentElement.style.backgroundColor = "orange";
            }

            allNumbersElement.appendChild(currentElement);
        }

        let currentButton = e.target;
        currentButton.removeEventListener("click", onClickGetMyNumbersButtonEventHandler);

        inputNumbersElement.disabled = true;
    }

    function checkNumber(number) {
        if(number < 1 || number > 49) {
            return false;
        }

        return true;
    }

    function distinct (value, index, arr) {
        return arr.indexOf(value) === index;
    }
}