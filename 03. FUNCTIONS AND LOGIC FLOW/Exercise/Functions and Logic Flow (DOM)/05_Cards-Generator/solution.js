function solve() {
    let getMyCardsButton = document.querySelector('#exercise button');
    getMyCardsButton.addEventListener('click', onClickGetMyCardsButtonEventHandler);

    let cardsElement = document.getElementById('cards');

    let fromElement = document.getElementById('from');
    let toElement = document.getElementById('to');

    function onClickGetMyCardsButtonEventHandler(e) {
        let fromValue = fromElement.value;
        let toValue = toElement.value;

        let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ["&hearts;", "&spades;", "&diamond;", "&clubs;" ];

        let startIndex = cards.findIndex(x => x === fromValue);
        let endIndex = cards.findIndex(x => x === toValue);

        let suitSelectIndex = document.querySelector('#exercise > select').selectedIndex;
        let currentSuit = suits[suitSelectIndex];
        
        for (let i = startIndex; i <= endIndex; i++) {
            let currentCardValue = cards[i];  

            let currentCard = document.createElement('div');
            currentCard.classList.add('card');

            let suitP1 = document.createElement('p');
            suitP1.innerHTML = currentSuit;

            let suitP2 = document.createElement('p');
            suitP2.innerHTML = currentSuit;

            let currentValueP = document.createElement('p');
            currentValueP.textContent = currentCardValue;

            currentCard.appendChild(suitP1);
            currentCard.appendChild(currentValueP);
            currentCard.appendChild(suitP2);

            cardsElement.appendChild(currentCard);
        }
    }
}