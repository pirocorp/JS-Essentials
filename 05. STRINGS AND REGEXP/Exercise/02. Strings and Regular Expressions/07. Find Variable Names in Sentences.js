function solve(input) {
    const regex = /\b_([A-Za-z0-9]+)\b/g;
    let matches = [];

    let currentMatch = regex.exec(input);
    while (currentMatch){
        matches.push(currentMatch[1]);
        currentMatch = regex.exec(input);
    }
    
    console.log(matches.join(','));
}
solve('The _id and _age variables are both integers.');