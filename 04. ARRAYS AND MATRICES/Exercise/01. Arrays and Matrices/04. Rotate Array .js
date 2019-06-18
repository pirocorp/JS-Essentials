function solve(arr) {
    let rotations = Number(arr.pop());
    rotations = rotations % arr.length;

    for (let i = 0; i < rotations; i++) {
        let swap = arr.pop();
        arr.unshift(swap);
    }

    console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);