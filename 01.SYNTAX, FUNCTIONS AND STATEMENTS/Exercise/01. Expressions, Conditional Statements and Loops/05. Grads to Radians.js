function solve(grads) {
    let deg = grads * 0.9;

    if(deg >= 360) {
        deg = deg % 360;
    }

    if(deg < 0) {
        deg = deg % 360;
        deg = 360 + deg;
    }

    console.log(deg);
}

solve(-50);