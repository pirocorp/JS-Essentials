/**
 * 
 * @param {String} string 
 */
function solve([string]){
    let regex = /\b(\w+)\b/gm

    let words = string.match(regex);
    let distinct = (value, index, array) => array.indexOf(value) === index;
    let distinctWords = words.filter(distinct);
    
    let result = {};

    for (let i = 0; i < distinctWords.length; i++) {
        let currentWord = distinctWords[i];
        let count = words.filter(x => x === currentWord).length;  
        result[currentWord] = count;     
    }

    console.log(JSON.stringify(result));
}

solve(["Far too slow, you're far too slow."])