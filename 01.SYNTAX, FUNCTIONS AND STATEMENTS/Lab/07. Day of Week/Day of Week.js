function solve(input) {

    let inputType = typeof(input);

    if (inputType !== "string") {
        console.log("error");
        return;
    }

    console.log(resolve(input));

    function resolve(input) {
        input = input.toLowerCase();
        switch(input) {
            case 'monday': return(1);
            case 'tuesday': return(2);
            case 'wednesday': return(3);
            case 'thursday ': return(4);
            case 'friday': return(5);
            case 'saturday': return(6);
            case 'sunday': return(7);
            default: return ("error");
        }
    }
}

solve("Thursday");