function solve(input) {
    input.split(/[\s(),;\.]/).filter(w => w != "").forEach(w => console.log(w));
}
solve('let sum = 4 * 4,b = "wow";');