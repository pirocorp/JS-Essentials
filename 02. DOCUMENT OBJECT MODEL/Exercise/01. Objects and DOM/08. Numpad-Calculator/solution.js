function solve() {
    let keysElements = Array.from(document.querySelectorAll('div.keys button'));
    keysElements.forEach(x => x.addEventListener("click", onButtonClickEventHandler));

    let clearElement = document.querySelector('button.clear');
    clearElement.addEventListener("click", onClickButtonClear)

    let expressionOutputElement = document.getElementById('expressionOutput');
    let resultOutputElement = document.getElementById('resultOutput');


    function onButtonClickEventHandler(e) {
        let currentPressedButton = e.target;
        let currentPressedButtonValue = currentPressedButton.getAttribute("value");
        
        if(currentPressedButtonValue === '=') {
            proccessExpression();
            return
        }

        if (currentPressedButtonValue === '/' ||
            currentPressedButtonValue === '*' ||
            currentPressedButtonValue === '-' ||
            currentPressedButtonValue === '+') {
            
            if (currentPressedButtonValue === '*') {
                currentPressedButtonValue = ' x '
            } else {
                currentPressedButtonValue = ` ${currentPressedButtonValue} `;
            }
        }

        expressionOutputElement.innerHTML += currentPressedButtonValue;    
    }

    function onClickButtonClear(e) {
        expressionOutputElement.innerHTML = '';
        resultOutputElement.innerHTML = '';
    }

    function proccessExpression() {
        let expression = expressionOutputElement.innerHTML;
        let expressionElements = expression
            .split(' ')
            .filter(x => x);

        if (expressionElements.length === 3) {
            let leftOperand = Number(expressionElements[0]);
            let rightOperand = Number(expressionElements[2]);
            let operator = expressionElements[1];

            let result = 0;

            switch (operator) {
                case '/':
                    result = leftOperand / rightOperand;
                    break;
                case 'x':
                    result = leftOperand * rightOperand;
                    break; 
                case '-':
                    result = leftOperand - rightOperand;
                    break;   
                case '+':
                    result = leftOperand + rightOperand;
                    break;           
                default:
                    result = NaN;
            }

            resultOutputElement.innerHTML = result;
            return
        }

        resultOutputElement.innerHTML = NaN;
    }
}