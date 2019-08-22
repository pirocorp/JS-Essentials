function solve() {
    const inputElement = document.getElementById('input');
    const outputElement = document.querySelector('#output p');

    const buttons = document.getElementsByTagName('button');

    const filterButton = buttons[0].addEventListener('click', filterInput);
    const sortButton = buttons[1].addEventListener('click', sort);
    const rotateButton = buttons[2].addEventListener('click', rotate);
    const getButton = buttons[3].addEventListener('click', get);

    function filterInput(e) {
        const inputString = inputElement.value;
        const filterSecondaryCommand = document.getElementById('filterSecondaryCmd').value;
        const positionIndex = Number(document.getElementById('filterPosition').value) - 1;

        let filteredString = '';

        switch (filterSecondaryCommand) {
            case 'uppercase':
                filteredString = inputString.split('').filter(x => isNaN(x) && x.toUpperCase() === x);
                break;
            case 'lowercase':
                filteredString = inputString.split('').filter(x => isNaN(x) && x.toLowerCase() === x);
                break;
            case 'nums':
                filteredString = inputString.split('').filter(x => !isNaN(x));
                break;
        }

        const result = filteredString[positionIndex];
        outputElement.textContent += result;
    }

    function sort(e) {
        const inputString = inputElement.value;
        const sortSecondaryCommand = document.getElementById('sortSecondaryCmd').value;
        const sortPosition = Number(document.getElementById('sortPosition').value) - 1;

        let sortedInput;

        switch (sortSecondaryCommand) {
            case 'A':
                sortedInput = inputString.split('').sort((a, b) => a.localeCompare(b));
                break;
            case 'Z':
                sortedInput = inputString.split('').sort((a, b) => b.localeCompare(a));
                break;
        }

        const result = sortedInput[sortPosition];
        outputElement.textContent += result;
    }

    function rotate(e) {
        const inputString = inputElement.value.split('');
        let rotateSecondaryCommand = Number(document.getElementById('rotateSecondaryCmd').value);
        const rotatePosition = Number(document.getElementById('rotatePosition').value) -1;

        rotateSecondaryCommand %= inputString.length;

        for (let index = 0; index < rotateSecondaryCommand; index++) {
            const temp = inputString.pop();
            inputString.unshift(temp);            
        }

        const result = inputString[rotatePosition];
        outputElement.textContent += result;
    }

    function get(e) {
        const inputString = inputElement.value.split('');
        const getIndex = Number(document.getElementById('getPosition').value) -1;

        const result = inputString[getIndex];
        outputElement.textContent += result;
    }
}