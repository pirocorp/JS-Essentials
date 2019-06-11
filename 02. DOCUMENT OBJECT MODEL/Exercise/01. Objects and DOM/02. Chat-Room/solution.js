function solve() {
    let sendButtonElement = document.getElementById("send");
    sendButtonElement.addEventListener("click", onClickSendButtonEventHandler);

    function onClickSendButtonEventHandler(e) {
        let chatAreaElement = document.getElementById('chat_input');
        let messageText = chatAreaElement.value;

        if(!messageText) {
            return
        }

        let newMessageElement = document.createElement("div");
        newMessageElement.className = 'message my-message';
        newMessageElement.innerHTML = messageText;
        let chatElement = document.getElementById('chat_messages');
        chatElement.appendChild(newMessageElement);
        chatAreaElement.value = '';
    }
}