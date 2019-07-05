function solve(arr) {
    const result = arr
        .join('')
        .split('')
        .reverse()
        .join('');

    console.log(result);
}
solve(['I', 'am', 'student']);