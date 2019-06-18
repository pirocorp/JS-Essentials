function solve() {
    let inputElement = document.getElementById('arr');
    let resultElement = document.getElementById('result');

    let arr = JSON.parse(inputElement.value);

    let desiredThickness = +arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentCrystal = +arr[i];
        processCrystal(currentCrystal, desiredThickness);
    }

    /**
     * 
     * @param {Number} crystal 
     * @param {Number} thicknes 
     */
    function processCrystal(crystal, thicknes) {
        //console.log(`Processing chunk ${crystal} microns`);
        proccessOutput(`Processing chunk ${crystal} microns`);

        let operations = [];
        let processOperationCount = 0;
        let processOperationName = '';

        while (crystal > thicknes) {
            let excessMaterial = crystal - thicknes;

            if (thicknes * 4 <= crystal) {
                processProcess('Cut');
            } else if (crystal * 0.2 <= excessMaterial) {
                processor('Lap');
            } else if (excessMaterial >= 20) {
                processor('Grind');
            } else if (excessMaterial >= 1) {
                processor('Etch');
            } else {
                processTransportAndWashing(processOperationName);
            }
        }

        if (processOperationCount !== 0) {
            operations.push(`${processOperationName} x${processOperationCount}`);
            operations.push('Transporting and washing');
        }

        if (crystal < thicknes) {
            operations.push('X-ray x1');
        }

        //console.log(operations.join('\n'));
        //console.log(`Finished crystal ${thicknes} microns`);
        
        operations.forEach(x => proccessOutput(x));

        proccessOutput(`Finished crystal ${thicknes} microns`);

        function processor(processName) {
            if (processOperationName === processName || processOperationName === '') {
                processProcess(processName);
            } else {
                processTransportAndWashing(processName);
            }
        }

        function processProcess(processName) {
            processOperationName = processName;
            processOperationCount++;

            switch (processName) {
                case 'Cut': crystal = crystal /= 4; break;
                case 'Lap': crystal = crystal -= crystal * 0.2; break;
                case 'Grind': crystal = crystal -= 20; break;
                case 'Etch': crystal = crystal -= 2; break;
                case 'XRay': crystal = crystal += 1; break;
            }
        }

        function processTransportAndWashing(processName) {
            operations.push(`${processOperationName} x${processOperationCount}`);
            operations.push('Transporting and washing');
            crystal = Math.floor(crystal);
            processOperationName = processName;
            processOperationCount = 0;
        }

        function proccessOutput(inputString) {
            let currentPElement = document.createElement('p');
            currentPElement.textContent = inputString;
            resultElement.appendChild(currentPElement);
        }
    }
}