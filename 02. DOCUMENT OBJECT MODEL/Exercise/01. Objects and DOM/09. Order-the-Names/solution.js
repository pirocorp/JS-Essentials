function solve() {
    let inputElement = document.querySelector('input[type=text]');

    let addButtonElement = document.getElementsByTagName('button')[0];
    addButtonElement.addEventListener("click", onClickAddButton);

    let liElements = Array.from(document.getElementsByTagName('li'));

    function onClickAddButton(e) {
        let inputValue = inputElement.value;

        if(!inputValue) {
            return
        }

        inputElement.value = '';

        let firstCharAsciiCode = inputValue.toLowerCase().charCodeAt(0);
        inputValue = `${inputValue[0].toUpperCase()}${inputValue.substring(1).toLowerCase()}`;

        if(firstCharAsciiCode > 122 || firstCharAsciiCode < 97) {
            return
        }

        let liIndex = firstCharAsciiCode - 97;
        let currentLiElement = liElements[liIndex];
        let currentLiElementValue = currentLiElement.textContent;

        if(!currentLiElementValue) {
            currentLiElement.textContent = inputValue;
            return
        }

        console.log(inputValue);

        currentLiElement.textContent += `, ${inputValue}`;
    }
}