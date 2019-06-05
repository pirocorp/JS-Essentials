function solve(inches) {
    let feets = Math.floor(inches / 12);
    inches = inches % 12;

    console.log(`${feets}'-${inches}"`)
}

solve(11)