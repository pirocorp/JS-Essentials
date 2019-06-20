function solve() {
    let inputElement = document.getElementById('arr');
    let inputArrays = JSON.parse(inputElement.value);

    let firstPlayerDeck = inputArrays[0];
    let secondPlayerDeck = inputArrays[1];

    let resultElement = document.getElementById('result');

    for (let i = 0; i < 20; i++) {

        if( firstPlayerDeck.length === 0 ||
            secondPlayerDeck.length === 0) {
                break;
            }
        
        let firstPlayerCard = firstPlayerDeck.shift();
        let secondPlayerCard = secondPlayerDeck.shift();

        let card1Power = getCardPower(firstPlayerCard);
        let card2Power = getCardPower(secondPlayerCard);

        if (card1Power > card2Power) {

            firstPlayerDeck.push(firstPlayerCard);
            firstPlayerDeck.push(secondPlayerCard);

        } else {

            secondPlayerDeck.push(firstPlayerCard);
            secondPlayerDeck.push(secondPlayerCard);

        }
    }

    inputElement.value = '';
    outputResult();

    function outputResult(){
        let firstDeckPelement = document.createElement('p');
        firstDeckPelement.textContent = `First -> ${firstPlayerDeck.join(', ')}`;
    
        let secondDeckPelement = document.createElement('p');
        secondDeckPelement.textContent = `Second -> ${secondPlayerDeck.join(', ')}`;
    
        resultElement.appendChild(firstDeckPelement);
        resultElement.appendChild(secondDeckPelement);
    }

    function getCardPower(card){

        if(!isNaN(card)){
            return Number(card);
        }

        card = card.toUpperCase()

        let cardsPower = {
            J: 11,
            Q: 12,
            K: 13,
            A: 14,
        }

        return cardsPower[card];
    }
}