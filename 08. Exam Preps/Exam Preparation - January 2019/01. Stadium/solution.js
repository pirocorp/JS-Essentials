function solve() {
    const outputElement = document.getElementById('output');

    let total = 0;
    let totalFans = 0;

    const stadium = {
        Levski: {
            A: 10,
            B: 7,
            C: 5
        },
        Litex: {
            A: 10,
            B: 7,
            C: 5
        },
        VIP: {
            A: 25,
            B: 15,
            C: 10
        }
    };

    const buttons = document.querySelectorAll('button.seat');

    for (let i = 0; i < buttons.length; i++) {
        const currentButton = buttons[i];
        currentButton.addEventListener('click', seatSelector);
        currentButton.classList.add('freeSeat');
    }

    document.querySelector('#summary button').addEventListener('click', totalOutput);

    function seatSelector(e) {
        const buttonCLicked = e.currentTarget;

        const seatNumber = buttonCLicked.textContent;
        let seatSector = '';

        const previousSibling = buttonCLicked.parentNode.previousElementSibling;
        const nextSibling = buttonCLicked.parentElement.nextElementSibling;

        if (previousSibling && nextSibling) {
            seatSector = 'B';
        } else if(previousSibling === null) {
            seatSector = 'A';
        } else if (nextSibling === null) {
            seatSector = 'C'
        }

        const seatZone = buttonCLicked.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('h2').textContent;

        const currentButtonClassList = Array.from(buttonCLicked.classList);

        if (currentButtonClassList.some(x => x === 'freeSeat')) {
            buttonCLicked.classList.remove('freeSeat');
            buttonCLicked.classList.add('takenSeat');

            outputElement.value += ` Seat ${seatNumber} in zone ${seatZone} sector ${seatSector} was taken.\n`;
            total += stadium[seatZone][seatSector];
            totalFans++;
        } else {
            outputElement.value += ` Seat ${seatNumber} in zone ${seatZone} sector ${seatSector} is unavailable.\n`;
        }
    }

    function totalOutput(e) {
        const summaryButton = e.currentTarget;
        summaryButton.parentNode.querySelector('span').textContent = `${total} leva, ${totalFans} fans.`;
        console.log(summaryButton);
    }
}