function solve(inputStrings) {
    let usernames = new Set();

    for (const user of inputStrings) {
        usernames.add(user);
    }

    let sortedResult = Array.from(usernames)
        .sort((a, b) => sortUsernames(a, b));

    console.log(sortedResult.join('\n'));

    function sortUsernames(a, b) {
        if(a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}
solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);