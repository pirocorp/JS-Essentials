function solve(str) {
    let result = str
        .split(' ')
        .filter(x => x !== '')
        .map(x => x[0].toUpperCase() + x.substr(1).toLowerCase());

    console.log(result.join(' '));
}
solve('Was that Easy? tRY thIs onE for SiZe!');