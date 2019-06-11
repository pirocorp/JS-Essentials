function solve() {
    let buttons = document.getElementsByTagName("button");

    let textAreas = document.getElementsByTagName("textarea");
    let inputTextAreaElement = textAreas[0];
    let outputTextAreaElement = textAreas[1];

    let generateButton = buttons[0];
    generateButton.addEventListener("click", onClickGenerateButtonEventHandler);

    let buyButton = buttons[1];
    buyButton.addEventListener("click", onClickBuyButtonEventHandler);

    function onClickBuyButtonEventHandler(e) {
        let checkedElements = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));
        let tableRowElements = checkedElements.map(x => x.parentElement.parentElement);
        
        let furnitures = tableRowElements
            .map(x => x.children[1].children[0].innerHTML)
            .join(', ');

        let prices = tableRowElements
            .map(x => x.children[2].children[0].innerHTML)
            .reduce((a, b) => +a + +b, 0)
            .toFixed(2);

        let decFactorCount = tableRowElements
            .map(x => x.children[3].children[0].innerHTML)
            .length;

        let averageDec = tableRowElements
            .map(x => x.children[3].children[0].innerHTML)
            .reduce((a, b) => +a + +b, 0);

        averageDec = averageDec / decFactorCount;

        outputTextAreaElement.value = '';
        outputTextAreaElement.value += `Bought furniture: ${furnitures}\n`;
        outputTextAreaElement.value += `Total price: ${prices}\n`;
        outputTextAreaElement.value += `Average decoration factor: ${averageDec}\n`;
    }

    function onClickGenerateButtonEventHandler(e) {
        let jsonString = inputTextAreaElement.value;

        if(!jsonString) {
            return
        }

        let jsonObjects = Array.from(JSON.parse(jsonString)); 
        jsonObjects.forEach(x => insertElement(x)); 
        inputTextAreaElement.value = '';       
    }

    function insertElement(object) {
        let newTableRowElement = document.createElement('tr');        
    
        let currentTableDataElement = document.createElement('td');            
        let imgElement = document.createElement('img');   
        imgElement.setAttribute("src", `${object.img}`);
        currentTableDataElement.appendChild(imgElement);
        newTableRowElement.appendChild(currentTableDataElement);

        currentTableDataElement = document.createElement('td');
        let pElement = document.createElement('p');
        pElement.innerHTML = object.name;
        currentTableDataElement.appendChild(pElement);
        newTableRowElement.appendChild(currentTableDataElement)

        currentTableDataElement = document.createElement('td');
        pElement = document.createElement('p');
        pElement.innerHTML = object.price;
        currentTableDataElement.appendChild(pElement);
        newTableRowElement.appendChild(currentTableDataElement)

        currentTableDataElement = document.createElement('td');
        pElement = document.createElement('p');
        pElement.innerHTML = object.decFactor;
        currentTableDataElement.appendChild(pElement);
        newTableRowElement.appendChild(currentTableDataElement)

        currentTableDataElement = document.createElement('td');
        let inputElement = document.createElement('input');
        inputElement.setAttribute("type", "checkbox");
        currentTableDataElement.appendChild(inputElement);
        newTableRowElement.appendChild(currentTableDataElement);

        let tbodyElement = document.querySelector('table tbody');
        tbodyElement.appendChild(newTableRowElement);
    }
}