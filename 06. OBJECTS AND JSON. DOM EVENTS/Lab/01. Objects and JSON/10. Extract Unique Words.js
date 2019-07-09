function solve(array) {
    let words = new Set();

    for (let currentLine of array) {
        currentLine = currentLine.toLowerCase();
        //Using regex with global flag for multiple test has issues
        const currentWords = currentLine
            .split(/(\w+)/g)
            .filter(x => /(\w+)/.test(x));

        currentWords.forEach(x => words.add(x));        
    }

    console.log(Array.from(words).join(', '));
}
solve([ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque quis hendrerit dui. ",
    	"Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ",
    	"Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ",
    	"Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ",
    	"Morbi in ipsum varius, pharetra diam vel, mattis arcu. ",
    	"Integer ac turpis commodo, varius nulla sed, elementum lectus. ",
    	"Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.",
]);