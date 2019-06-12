function solve() {
    let buttonElements = Array.from(document.getElementsByTagName('button'));
    buttonElements.forEach(x => x.addEventListener("click", onClickShowMoreButtonEventHandler));

    function onClickShowMoreButtonEventHandler(e) {
        let currentProfileElement = e.target.parentElement;
        let currentProfileStatus = currentProfileElement.querySelector('input[type=radio]:checked').value.toLowerCase();
        
        if(currentProfileStatus === 'lock') {
            return;
        }
        
        let hiddenElements = currentProfileElement.getElementsByTagName('div')[1];
        hiddenElements.style.display = 'inline';

        let currentButtonElement = e.target;
        currentButtonElement.textContent = 'Hide It';
        
        currentButtonElement.removeEventListener("click", onClickShowMoreButtonEventHandler);
        currentButtonElement.addEventListener("click", onClickHideItButtonEventHandler);
    }

    function onClickHideItButtonEventHandler(e) {
        let currentProfileElement = e.target.parentElement;
        let currentProfileStatus = currentProfileElement.querySelector('input[type=radio]:checked').value.toLowerCase();

        if (currentProfileStatus === 'lock') {
            return;
        }

        let hiddenElements = currentProfileElement.getElementsByTagName('div')[1];
        hiddenElements.style.display = 'none';

        let currentButtonElement = e.target;
        currentButtonElement.textContent = 'Show more';

        currentButtonElement.removeEventListener("click", onClickHideItButtonEventHandler);
        currentButtonElement.addEventListener("click", onClickShowMoreButtonEventHandler);
    }
} 

//Other solution 
/* function solve() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            let currentButton = e.target;
            let parentNode = currentButton.parentNode;
            let unlockedInput = parentNode.children[4];

            if (unlockedInput.checked) {
                let hiddenDiv = parentNode.children[9];
                let hiddenDivDisplay = hiddenDiv.style.display;

                if (hiddenDivDisplay === 'inline') {
                    hiddenDiv.style.display = 'none';
                    currentButton.textContent = 'Show more';

                } else if (hiddenDivDisplay === '' || hiddenDivDisplay === 'none') {
                    hiddenDiv.style.display = 'inline';
                    currentButton.textContent = 'Hide it';
                }
            }
        })
    }
} */