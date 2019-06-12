function solve() {
    let buttons = document.getElementById('buttons');

    let nextButtonElement = buttons.children[0];
    nextButtonElement.addEventListener("click", onClickNextButtonEventHandler);

    let cancelButtonElement = buttons.children[1];
    cancelButtonElement.addEventListener("click", onClickCancelButtonEventHandler);


    let stepsGenerator = createStepsGenerator();
    let currentStepIndex = 0;

    function onClickNextButtonEventHandler(e) {
        let currentStep = stepsGenerator(currentStepIndex);
        currentStep(e);
    }

    function onClickCancelButtonEventHandler(e) {
        let exerciseElement = document.getElementById('exercise');
        exerciseElement.style.display = 'none';
    }

    function createStepsGenerator() {
        let firstStepFunction = function(e) {
            let contentElement = document.getElementById('content');
            contentElement.style.background = 'none';
            
            let firstStepElement = document.getElementById('firstStep');
            firstStepElement.style.display = 'block';
            currentStepIndex++;
        }

        let secondStepFunction = function(e) {
            let radioButtons = document.querySelectorAll('#firstStep input[type=radio]');
            let value = getRadioButtonValue(radioButtons);

            if (value === 'disagree') {
                return
            }

            let firstStepElement = document.getElementById('firstStep');
            firstStepElement.style.display = 'none';

            let secondStepElement = document.getElementById('secondStep');
            secondStepElement.style.display = 'block';   
            
            nextButtonElement.style.display = 'none';

            setTimeout(() => {
                nextButtonElement.style.display = '';
            }, 3000);

            currentStepIndex++;
        }

        let thirdStepFunction = function(e) {
            let secondStepElement = document.getElementById('secondStep');
            secondStepElement.style.display = 'none'; 

            let thirdStepElement = document.getElementById('thirdStep');
            thirdStepElement.style.display = 'block'; 

            currentStepIndex++;
        }

        let lastStepFunction = function(e) {
            let exerciseElement = document.getElementById('exercise');
            exerciseElement.style.display = 'none';
        }

        let stepFunctions = [firstStepFunction, secondStepFunction, thirdStepFunction, lastStepFunction]

        return function (currentStepIndex) {
            return stepFunctions[currentStepIndex];
        }
    }

    function getRadioButtonValue(radioButtons) {
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }        
        }
    }
}