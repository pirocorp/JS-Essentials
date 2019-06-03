/**
 * 
 * @param {String} str 
 * @param {String} letter 
 */
function letterOccurrences(str, letter) {
    let count = 0;
    let currentIndex = 0;

    while(currentIndex !== -1) {
        currentIndex = str.indexOf(letter);
        if(currentIndex >= 0) {
            str = str.substr(currentIndex + 1);
            /* console.log(str); */
            count++;
        }
    }

    console.log(count);
}

letterOccurrences("lHeasdfasdfasllolasdfasdfasdfasdl", "l");