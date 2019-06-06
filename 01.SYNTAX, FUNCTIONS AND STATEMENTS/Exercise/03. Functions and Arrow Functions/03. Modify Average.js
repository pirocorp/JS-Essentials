function solve(number) {
    let result = number.toString();

    while (getAverageValue(result) <= 5) {
        result += '9';
    }

    console.log(result);

    function getAverageValue(number) {
        let numberAsString = number.toString();        
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {  
            sum += +numberAsString[i]; // This is JS :D     
        }

        return(sum / numberAsString.length);
    }
}

solve('5825')