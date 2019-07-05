function solve(input) {
    const regex = /\w+/g;
    const words = input.match(regex);
    console.log(words.join('|'));
}
solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');