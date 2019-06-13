function solve() {
    let currentNumber;

    let buttonElements = Array.from(document.getElementById('operations').children);
    buttonElements[0].addEventListener("click", onClickChopButtonEventHandler);
    buttonElements[1].addEventListener("click", onClickDiceButtonEventHandler);
    buttonElements[2].addEventListener("click", onClickSpiceButtonEventHandler);
    buttonElements[3].addEventListener("click", onClickBakeButtonEventHandler);
    buttonElements[4].addEventListener("click", onClickFilletButtonEventHandler);

    let outputElement = document.getElementById('output');
    
    function onClickChopButtonEventHandler(e) {
        readNumber();
        currentNumber /= 2;
        outputElement.textContent = currentNumber;
    } 
    
    function onClickDiceButtonEventHandler(e) {
        readNumber();
        currentNumber = Math.sqrt(currentNumber);
        outputElement.textContent = currentNumber;
    } 
    
    function onClickSpiceButtonEventHandler(e) {
        readNumber();
        currentNumber++;
        outputElement.textContent = currentNumber;
    } 
    
    function onClickBakeButtonEventHandler(e) {
        readNumber();
        currentNumber *= 3;
        outputElement.textContent = currentNumber;
    } 
    
    function onClickFilletButtonEventHandler(e) {
        readNumber();
        currentNumber *= 0.8;
        outputElement.textContent = currentNumber;
    }
    
    function readNumber() {
        let inputElement = document.querySelector('#exercise input');
        currentNumber = outputElement.textContent || inputElement.value;
    }
}