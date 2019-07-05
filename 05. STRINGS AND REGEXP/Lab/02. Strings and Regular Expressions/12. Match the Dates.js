function solve(arrOfStrings) {
    const regex = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}\b/g;
    let dates = [];

    for (let i = 0; i < arrOfStrings.length; i++) {
        const element = arrOfStrings[i];
        const matches = element.match(regex);
        dates = dates.concat(matches); 
    }

    dates = dates
        .filter(x => x)
        .map(x => {
            const tokens = x.split('-');
            const day = tokens[0];
            const month = tokens[1];
            const year = tokens[2];
            return `${x} (Day: ${day}, Month: ${month}, Year: ${year})`;
        });

    console.log(dates.join('\n'));
}
solve(['I am born on 30-Dec-1994.',
'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.'
]);