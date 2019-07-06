function solve() {
    const resultElement = document.getElementById('result');
    const inputString = document.getElementById('string').value;

    const tokens = inputString.split(' , ');

    const text = tokens[0];
    const information = tokens[1];

    switch(information) {
        case 'name':
            resultElement.textContent = `Mr/Ms, ${getName(text)}, have a nice flight!`
            break;
        case 'flight':
            resultElement.textContent = `'Your flight number ${getFlightNumber(text)} is from ${getFlightStartEnd(text)}.`
            break;
        case 'company':
            resultElement.textContent = `Have a nice flight with ${getCompanyName(text)}.`;
            break;
        case 'all':
            resultElement.textContent = `Mr/Ms, ${getName(text)}, your flight number ${getFlightNumber(text)} is from ${getFlightStartEnd(text)}. Have a nice flight with ${getCompanyName(text)}.`
            break;
    }

    function getName(inputText) {
        const nameRegex = / ([A-Z][a-z]*)-([A-Z][a-z]*)(\.-([A-Z][a-z]*))? /g;
        let name = inputText.match(nameRegex)[0];

        name = name.replace('-', ' ').trim();
        return name;
    }

    function getFlightNumber(inputText) {
        const flightNumberRegex = / [A-Z]{1,3}\d{1,5} /g;
        let flightNumber = inputText.match(flightNumberRegex)[0];

        flightNumber = flightNumber.trim();
        return flightNumber;
    }

    function getFlightStartEnd(inputText) {
        const flightTrackRegex = / ([A-Z]{3})\/([A-Z]{3}) /g;
        const flightTrack = Array.from(inputText.matchAll(flightTrackRegex))[0];

        const source = flightTrack[1];
        const dest = flightTrack[2];
        return `${source} to ${dest}`;
    }

    function getCompanyName(inputText) {
        const companyRegex = /- ([A-Z][a-z]*\*[A-Z][a-z]*) /g;
        let company = Array.from(inputText.matchAll(companyRegex))[0][1];

        company = company.replace('*', ' ');
        return company;
    }
}