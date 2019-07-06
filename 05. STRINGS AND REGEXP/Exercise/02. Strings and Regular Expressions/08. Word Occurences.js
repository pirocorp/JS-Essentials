function solve(text, pattern) {
    const regex = new RegExp(`\\b${pattern}\\b`, 'gi');

    let count = 0;

    while(regex.test(text)) {
        count++;
    }

    console.log(count);
}
solve('The waterfall was so high, that the child couldn’t see its peak.', 'the' );