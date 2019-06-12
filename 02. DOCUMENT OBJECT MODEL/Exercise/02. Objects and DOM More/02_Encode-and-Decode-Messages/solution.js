function solve() {
    let buttonElements = document.getElementsByTagName('button');
    let encodeButtonElement = buttonElements[0];
    let decodeButtonElement = buttonElements[1];

    let textAreasElements = document.getElementsByTagName('textarea');
    let inputMessageElement = textAreasElements[0];
    let recivedMessageElement = textAreasElements[1];


    encodeButtonElement.addEventListener("click", onClickEncodeButtonEventHandler);
    decodeButtonElement.addEventListener("click", onClickDecodeButtonEventHandler);

    function onClickEncodeButtonEventHandler(e) {
        let inputMessageValue = inputMessageElement.value;

        if(!inputMessageValue) {
            return
        }

        let encodedMessage = '';

        for (let i = 0; i < inputMessageValue.length; i++) {
            let currentAsciCode = inputMessageValue.charCodeAt(i);
            let encodedChar = String.fromCharCode(++currentAsciCode);
            encodedMessage += encodedChar;
        }

        recivedMessageElement.value = encodedMessage;
        inputMessageElement.value = '';
    }

    function onClickDecodeButtonEventHandler(e) {
        let recivedMessageValue = recivedMessageElement.value;

        if(!recivedMessageValue) {
            return
        }

        let decodedMessage = '';

        for (let i = 0; i < recivedMessageValue.length; i++) {
            let currentAsciCode = recivedMessageValue.charCodeAt(i);
            let decodedChar = String.fromCharCode(--currentAsciCode);
            decodedMessage += decodedChar;
        }

        recivedMessageElement.value = decodedMessage;
    }
}