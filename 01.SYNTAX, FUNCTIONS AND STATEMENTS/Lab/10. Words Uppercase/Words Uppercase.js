function solve(string) {
    let regex = /\b(\w+)\b/g;
    let words = string.match(regex);
    for (let index in words) {
        words[index] = words[index].toUpperCase();
    }

    let result = '';

    if ( words !== null && words.length > 0) {
        result = words.join(", ");
    }

    console.log(result);
}

solve('hello');