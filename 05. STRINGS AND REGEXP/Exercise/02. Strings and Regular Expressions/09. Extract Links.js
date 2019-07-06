function solve(arrOfStrings) {
    const linkRegex = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;

    let result = [];

    for (let i = 0; i < arrOfStrings.length; i++) {
        const currentString = arrOfStrings[i];
        const matches = currentString.match(linkRegex);
        
        if (matches) {
            result = result.concat(Array.from(matches));
        }
    }

    result.forEach(x => console.log(x)); 
}
solve(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko'] );