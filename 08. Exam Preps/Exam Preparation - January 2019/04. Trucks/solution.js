function solve() {
    const trucks = {};
    const tires = [];

    const fieldsets = document.getElementsByTagName('fieldset');
    const backupTiresElement = fieldsets[fieldsets.length - 2].querySelector('div');
    const trucksElement = fieldsets[fieldsets.length - 1].querySelector('div');

    const buttons = document.getElementsByTagName('button');
    
    const addNewTruckButton = buttons[0];
    const addNewTiresButton = buttons[1];
    const goToWorkButton = buttons[2];
    const endShiftButton = buttons[3];

    addNewTruckButton.addEventListener('click', addNewTruck);
    addNewTiresButton.addEventListener('click', addNewTires);
    goToWorkButton.addEventListener('click', goToWork);
    endShiftButton.addEventListener('click', endOfShift);

    function addNewTruck(e) {
        const plateNumber = document.getElementById('newTruckPlateNumber').value;
        const tiresCondition = document.getElementById('newTruckTiresCondition').value
            .split(' ')
            .filter(x => x !== '')
            .map(x => Number(x));

        const currentRegisteredTrucks = Object.keys(trucks);

        if(currentRegisteredTrucks.some(x => x === plateNumber)) {
            return;
        }

        const newTruck = {
            plateNumber,
            tiresCondition,
            travelledDistance: 0,
        }

        trucks[plateNumber] = newTruck;

        const truckDivElement = document.createElement('div');
        truckDivElement.classList.add('truck');
        truckDivElement.textContent = plateNumber;
        trucksElement.appendChild(truckDivElement);

        printData();
    }

    function addNewTires(e) {
        const tiresSet = document.getElementById('newTiresCondition').value
            .split(' ')
            .filter(x => x !== '')
            .map(x => Number(x));   
            
        tires.push(tiresSet); 
        visualiseTireSet(tiresSet);

        printData();
    }

    function visualiseTireSet(tiresSet) {
        const backupTireSet = document.createElement('div');
        backupTireSet.classList.add('tireSet');
        backupTireSet.textContent = tiresSet.join(' ');
        backupTiresElement.appendChild(backupTireSet);
    }

    function goToWork(e) {
        const currentPlateNumber = document.getElementById('workPlateNumber').value;
        const distance = Number(document.getElementById('distance').value);

        const currentTruck = trucks[currentPlateNumber];

        if(!currentTruck) {
            return;
        }

        const wear = Math.ceil(distance / 1000);

        if (currentTruck.tiresCondition.some(x => x < wear)) {
            if(tires.length > 0) {
                let backupTires = tires.shift();

                if (backupTires.some(x => x < wear)) {
                    visualizeBackupTires();
                    return;
                }

                backupTires = backupTires.map(x => x - wear);
                
                currentTruck.tiresCondition = backupTires;
                currentTruck.travelledDistance += distance;

                visualizeBackupTires();
            }
        } else {
            currentTruck.tiresCondition = currentTruck.tiresCondition.map(x => x - wear);
            currentTruck.travelledDistance += distance;
        }

        printData();
    }

    function visualizeBackupTires() {
        backupTiresElement.innerHTML = '';

        for (let i = 0; i < tires.length; i++) {
            const tiresSet = tires[i];
            visualiseTireSet(tiresSet);
        }
    }

    function endOfShift(e) {
        const textareaElement = document.getElementsByTagName('textarea')[0];
        textareaElement.value = '';
        
        for (const key in trucks) {
            const currentTruck = trucks[key];
            textareaElement.value += `Truck ${currentTruck.plateNumber} has traveled ${currentTruck.travelledDistance}.\n`;
        }

        textareaElement.value += `You have ${tires.length} sets of tires left.\n`;
        printData();
    }

    function getTrucksFromTrucksElement() {
        const elements = Array.from(trucksElement.childNodes)
            .map(x => x.textContent);
        
        return elements;
    }

    function getTiresFromBackupTiresElement() {
        const elements = Array.from(backupTiresElement.childNodes)
            .map(x => x.textContent
                .split(' ')
                .filter(y => y !== '')
                .map(y => Number(y))
            );

        return elements;
    }

    function printData() {
        /* console.log(trucks);
        console.log(tires); */
    }
}