function solve(arr) {
    let v1 = +arr[0];
    let v2 = +arr[1];
    let time = +arr[2];
    time = time / 3600;
    
    let distance1 = time * v1 * 1000;
    let distance2 = time * v2 * 1000;

    console.log(Math.abs(distance1 - distance2));
}

solve([5, -5, 40]);