function solve() {
    let nextQuestionButtons = Array.from(document.getElementsByTagName('button'));
    nextQuestionButtons.forEach(x => x.addEventListener("click", onClickNextQuestionButton));
    let answerChecker = createAnswerChecker();
    let correctAnswers = 0;


    function onClickNextQuestionButton(e) {
        let currentSectionElement = e.target.parentElement;
        let currentAnswerElement = currentSectionElement.querySelector("input[type=radio]:checked");
        
        if(!currentAnswerElement) {
            return
        }

        let currentAnswerValue = currentAnswerElement.value; 

        if(answerChecker(currentAnswerValue)) {
            correctAnswers++;
        }

        let nextHiddenSection = document.querySelector("section.hidden");

        let currentButtonElement = e.target;
        currentButtonElement.removeEventListener("click", onClickNextQuestionButton);

        let currentRadioButtons = Array.from(currentSectionElement.querySelectorAll("input[type=radio]"));
        currentRadioButtons.forEach(x => x.disabled = true);

        if(nextHiddenSection) {
            nextHiddenSection.classList.remove('hidden');
        } else {
            let resultElement = document.getElementById('result');
            let resultText = 'You are recognized as top SoftUni fan!';

            if(correctAnswers !== 3) {
                resultText = `You have ${correctAnswers} right answers`;
            }

            resultElement.textContent = resultText;
        }
    }

    function createAnswerChecker() {
        let rightAnswers = ['2013', 'Pesho', 'Nakov', ];
        let currentAnswerIndex = -1;

        return function (currentAnswer) {
            currentAnswerIndex++;

            if(currentAnswerIndex < rightAnswers.length) {
                let currentRightAnswer = rightAnswers[currentAnswerIndex].toLocaleLowerCase();
                currentAnswer = currentAnswer.toLocaleLowerCase();

                return currentAnswer === currentRightAnswer;
            }

            return undefined;
        }
    }
}