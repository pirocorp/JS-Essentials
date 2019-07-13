function solve(inputArrs) {
    let result = [];

    for (const arr of inputArrs) {
        let currentArray = JSON.parse(arr);
        currentArray.sort((a, b) => b - a);

        if(!result.some(x => arrsAreEqual(x, currentArray))) {
            result.push(currentArray);
        }
    }

    result.sort((a, b) => a.length - b.length);

    result.forEach(x => console.log(`[${x.join(', ')}]`));

    function arrsAreEqual(arr1, arr2) {
        if(arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }            
        }

        return true;
    }
}
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);