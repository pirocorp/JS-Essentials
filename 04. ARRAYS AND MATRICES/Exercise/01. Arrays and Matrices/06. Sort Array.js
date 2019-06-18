function solve(arr) {
    arr.sort(sortComparator);
    console.log(arr.join('\n'));

    function sortComparator(el1, el2) {
        //Sort by length
        if (el1.length < el2.length) return -1;
        if (el1.length > el2.length) return 1;

        //Sort Alphabeticaly
        if (el1 > el2) return 1;
        if (el1 < el2) return -1;
    }
}
solve(['test', 'Deny', 'omen', 'Default']);