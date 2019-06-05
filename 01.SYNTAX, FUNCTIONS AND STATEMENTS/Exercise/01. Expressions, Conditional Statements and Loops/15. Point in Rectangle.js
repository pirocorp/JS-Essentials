function solve(input){
    let x = +input[0];
    let y = +input[1];
    let xMin = +input[2];
    let xMax = +input[3];
    let yMin = +input[4];
    let yMax = +input[5];

    let xCordinate = x >= xMin && x <= xMax;
    let yCordinate = y >= yMin && y <= yMax;

    if(xCordinate && yCordinate) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

solve([8, -1, 2, 12, -3, 3]);