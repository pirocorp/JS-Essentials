function coffeeStorage() {
    let warehouse = {};
    
    const textAreaElement = document.querySelector('body section textarea');
    const inputArr = JSON.parse(textAreaElement.value);

    for (const currentCommand of inputArr) {

        let [command, brand, name, expireDate, quantity] = currentCommand.split(', ');
        quantity = Number(quantity);

        let currentCoffee = {
            brand,
            name,
            expireDate,
            quantity
        };

        switch(command) {
            case 'IN':
                processInCommand(currentCoffee);
                break;
            case 'INSPECTION':
               processInspectionCommand();
                break;
            case 'REPORT':
                processReportCommand();
                break;
            case 'OUT':
                processOutCommand(currentCoffee);
                break;
        };
    }

    function processInCommand(currentCoffee) {

        if (!warehouse[currentCoffee.brand]) {
            warehouse[currentCoffee.brand] = {};
        }
        if (!warehouse[currentCoffee.brand][currentCoffee.name]) {
            warehouse[currentCoffee.brand][currentCoffee.name] = currentCoffee;
        } else {
            if (warehouse[currentCoffee.brand][currentCoffee.name].expireDate < currentCoffee.expireDate) {
                warehouse[currentCoffee.brand][currentCoffee.name] = currentCoffee;
            } else if (warehouse[currentCoffee.brand][currentCoffee.name].expireDate === currentCoffee.expireDate) {
                warehouse[currentCoffee.brand][currentCoffee.name].quantity += currentCoffee.quantity;
            }
        }
    }

    function processReportCommand () {
        const reportElement = document.querySelectorAll('section > div')[0].querySelector('p'); 

        let result = "";
        for (const brand in warehouse) {
            let result = `${brand}:`;
            for (const coffee in warehouse[brand]) {
                result += ` ${warehouse[brand][coffee].name} - ${warehouse[brand][coffee].expireDate} - ${warehouse[brand][coffee].quantity}.`;
            }
            result += "</br>";
            reportElement.innerHTML += result;
        }
    }

    function processInspectionCommand() {
        const inspectionElement = document.querySelectorAll('section > div')[1].querySelector('p'); 

        let result = "";

        for (const brand of Object.keys(warehouse).sort((a, b) => a.localeCompare(b))) {
            let result = `${brand}:`;
            for (const coffee of Object.keys(warehouse[brand])
                .sort((a, b) => warehouse[brand][b].quantity - warehouse[brand][a].quantity)) {
                result += ` ${warehouse[brand][coffee].name} - ${warehouse[brand][coffee].expireDate} - ${warehouse[brand][coffee].quantity}.`;
            }
            result += "</br>";
            inspectionElement.innerHTML += result;
        }
    }

    function processOutCommand(currentCoffee) {
        if (warehouse[currentCoffee.brand] && warehouse[currentCoffee.brand][currentCoffee.name]) {
            if (warehouse[currentCoffee.brand][currentCoffee.name].expireDate > currentCoffee.expireDate
                && warehouse[currentCoffee.brand][currentCoffee.name].quantity >= currentCoffee.quantity) {
                warehouse[currentCoffee.brand][currentCoffee.name].quantity -= currentCoffee.quantity;
            }
        }
    }
}