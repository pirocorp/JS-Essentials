function solve(x1, y1, x2, y2) {
    let point1 = {
        x: x1,
        y: y1
    }

    let point2 = {
        x: x2,
        y: y2
    }

    let sum = (x1 - x2) ** 2 + (y1 - y2) ** 2;

    console.log(Math.sqrt(sum));
}

solve(2.34, 15.66, -13.55, -2.9985);