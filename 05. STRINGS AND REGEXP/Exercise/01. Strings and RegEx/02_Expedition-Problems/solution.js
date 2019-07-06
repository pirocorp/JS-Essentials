function solve() {
    const resultElement = document.getElementById('result');
    const key = document.getElementById('string').value;
    const text = document.getElementById('text').value;

    const messagePattern = `${key}(.*)${key}`;
    const messageRegex = new RegExp(messagePattern, 'g');
    const messageExec = messageRegex.exec(text);
    let message = messageExec[1];
    message = `Message: ${message}`;

    const cordinatesRegex = /(north|east).*?(\d{2})[^,]*,[^,]*(\d{6})/gi;

    let north;
    let east;

    let match = cordinatesRegex.exec(text);

    while(match) {
        const name = match[1].toLowerCase();
        const integer = match[2];
        const decimal = match[3];

        if(name === 'east') {
            east = `${integer}.${decimal} E`;
        } else if(name === 'north') {
            north = `${integer}.${decimal} N`;
        }

        match = cordinatesRegex.exec(text);
    }

    const latitudeElement = document.createElement('p');
    latitudeElement.textContent = north;
    
    const longitudeElement = document.createElement('p');
    longitudeElement.textContent = east;

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    resultElement.appendChild(latitudeElement);
    resultElement.appendChild(longitudeElement);
    resultElement.appendChild(messageElement);
}