function solve() {
    let playerOneCardElements = Array.from(document.querySelectorAll("#player1Div img"));
    let playerTwoCardElements = Array.from(document.querySelectorAll("#player2Div img"));

    addEventListenersToArrayOfElements(playerOneCardElements, "click", onClickEventHandler);
    addEventListenersToArrayOfElements(playerTwoCardElements, "click", onClickEventHandler);

    let playerOneSelectedCard;
    let playerTwoSelectedCard;

    function onClickEventHandler(e) {
        let cardElement = e.target;
        let parentElement = cardElement.parentElement;
        
        cardElement.src = "images/whiteCard.jpg"

        if (parentElement.id === "player1Div" ) {
            
            if (playerOneSelectedCard) {
                playerOneSelectedCard.src = "images/card.jpg";
            }

            if(playerOneSelectedCard !== cardElement) {

                playerOneSelectedCard = cardElement;
            } else {
                playerOneSelectedCard = undefined;
            }
        } else if (parentElement.id === "player2Div") {

            if (playerTwoSelectedCard) {
                playerTwoSelectedCard.src = "images/card.jpg";
            }

            if (playerTwoSelectedCard !== cardElement) {

                playerTwoSelectedCard = cardElement;
            } else {
                playerTwoSelectedCard = undefined;
            }
        }

        let spanElements = document.getElementById("result").children;
        

        if(playerOneSelectedCard) {
            let cardElementName = playerOneSelectedCard.getAttribute("name");
            spanElements[0].innerHTML = cardElementName;
        } else {
            spanElements[0].innerHTML = '';
        }

        if (playerTwoSelectedCard) {
            let cardElementName = playerTwoSelectedCard.getAttribute("name");
            spanElements[2].innerHTML = cardElementName;
        } else {
            spanElements[2].innerHTML = '';
        }

        let history = document.getElementById("history")

        if( playerOneSelectedCard && playerTwoSelectedCard) {
            playerOneSelectedCard.removeEventListener("click", onClickEventHandler);
            playerTwoSelectedCard.removeEventListener("click", onClickEventHandler);

            let playerOneCardName = Number(playerOneSelectedCard.getAttribute("name"));
            let playerTwoCardName = Number(playerTwoSelectedCard.getAttribute("name"));

            if (playerOneCardName > playerTwoCardName) {
                playerOneSelectedCard.style.border = "2px solid green";
                playerTwoSelectedCard.style.border = "2px solid red";
                
            } else {
                playerOneSelectedCard.style.border = "2px solid red";
                playerTwoSelectedCard.style.border = "2px solid green";
            }

            playerOneSelectedCard = undefined;
            playerTwoSelectedCard = undefined;

            history.innerHTML += `[${playerOneCardName} vs ${playerTwoCardName}] `;

            setTimeout(() => {
                    spanElements[0].innerHTML = '';
                    spanElements[2].innerHTML = '';
                }, 
                2000
            );
        }     

    }
    
    function addEventListenersToArrayOfElements(array, event, eventHandler) {
        array.forEach(x => x.addEventListener(event, eventHandler));
    }
}