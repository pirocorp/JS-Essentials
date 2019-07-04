function solve() {
    const word = document.getElementById('word').value;
    let listOfStrings = JSON.parse(document.getElementById('text').value);
    const pattern = listOfStrings[0].split(' ')[2];
    const regex = new RegExp(pattern, 'ig');

    listOfStrings = listOfStrings.map(x => x.replace(regex, word));

    let results = listOfStrings.map( x => {
        let p = document.createElement('p');
        p.textContent = x;
        return p;
    });

    let resultElement = document.getElementById('result');

    results.forEach(element => {
        resultElement.appendChild(element);
    });
}