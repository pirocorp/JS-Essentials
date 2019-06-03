//Function with defaulth value
function squareOfStars(n = 5) { 
    function printStars(count) {
        console.log("*" + " *".repeat(count - 1));
    }

    for (let i = 0; i < n; i++) {
        printStars(n);        
    }    
}

squareOfStars(3);