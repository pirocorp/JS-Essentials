function solve(input) {
    let size = 5;

    let parameter = Number(input);

    if(!isNaN(parameter) && parameter > 0) {
        size = parameter;
    }

    for(let i = 0; i < size; i++) {
        console.log("* ".repeat(size));
    }
}

solve(2);