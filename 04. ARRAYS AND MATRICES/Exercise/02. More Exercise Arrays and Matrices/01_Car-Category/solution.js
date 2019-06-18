function solve() {
    let inputArr = JSON.parse(document.getElementById("arr").value);
    let resultElement = document.getElementById("result");
    let result = {};

    inputArr.forEach(counter);

    for (let resultKey in result) {
        let pElement = document.createElement("p");
        pElement.textContent = `${resultKey} -> ${result[resultKey]}`;
        resultElement.appendChild(pElement);
    }

    document.getElementById("arr").value = "";

    function counter(element) {
        let key = "Other";
        if (/^BA \d{3} \d{3}$/g.test(element)) {
            key = "BulgarianArmy";
        } else if (/^CP \d{2} \d{3}$/g.test(element)) {
            key = "CivilProtection";
        } else if (/^C[T]? \d{4}$/g.test(element)) {
            key = "Diplomatic";
        } else if (/^XX \d{4}$/g.test(element)) {
            key = "Foreigners";
        } else if (/^\d{3} [\w\u0430-\u044f]{1} \d{3}$/g.test(element)) {
            key = "Transient";
        } else if (/^(C|CA|СВ) \d{4} [\w\u0430-\u044f]{1,2}$/g.test(element)) {
            key = "Sofia";
        } else if (/^[\w\u0430-\u044f]{1,2} \d{4} [\w\u0430-\u044f]{1,2}$/g.test(element)) {
            key = "Province";
        }

        result[key] === undefined ? result[key] = 1 : result[key]++;
    }
}