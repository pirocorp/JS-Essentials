function solve() {
    let buttons = document.getElementsByTagName('button');
    let meSendButton = buttons[0];
    let peshoSendButton = buttons[1];

    let chatChronologyElement = document.getElementById('chatChronology');
    
    meSendButton.addEventListener("click", onClickMeSendButtonEventHandler);
    peshoSendButton.addEventListener("click", onClickPeshoSendButtonEventHandler);

    function onClickMeSendButtonEventHandler() {
        

        let myInputElement = document.getElementById('myChatBox');
        let myInputText = myInputElement.value;
        
        if(!myInputText) {
            return
        }

        let messageElement = createNewMessageElement('Me', myInputText, 'left');
        chatChronologyElement.appendChild(messageElement);

        myInputElement.value = '';
    }

    function onClickPeshoSendButtonEventHandler() {
        let peshoInputElement = document.getElementById('peshoChatBox');
        let peshoInputText = peshoInputElement.value;

        if (!peshoInputText) {
            return
        }

        let messageElement = createNewMessageElement('Pesho', peshoInputText, 'right');
        chatChronologyElement.appendChild(messageElement);

        peshoInputElement.value = '';
    }

    function createNewMessageElement(sender, inputText, textAlign) {
        let newMessageDivRootElement = document.createElement('div');

        let spanElement = document.createElement('span');
        spanElement.textContent = sender;

        let pElement = document.createElement('p');
        pElement.textContent = inputText;

        newMessageDivRootElement.appendChild(spanElement);
        newMessageDivRootElement.appendChild(pElement);

        //Other Syntaxis element.style.property won't work
        newMessageDivRootElement.style['textAlign'] = textAlign;

        return newMessageDivRootElement;
    }
}