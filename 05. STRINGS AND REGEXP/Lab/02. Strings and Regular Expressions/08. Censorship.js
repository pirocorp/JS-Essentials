/**
 * 
 * @param {String} text 
 * @param {Array} listOfStrings 
 */
function solve(text, listOfStrings) {
    for (let i = 0; i < listOfStrings.length; i++) {
        const element = listOfStrings[i];
        const regex = new RegExp(element, 'g');
        const str = new Array(element.length + 1).join('-')
        text = text.replace(regex, str);
    }

    console.log(text);
}
solve('roses are red, violets are blue', [', violets are', 'red']);