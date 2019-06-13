function binarySearch() {
    let arrayElement = document.getElementById('arr');
    let arr = Array.from(arrayElement.value
                            .split(', ')
                            .filter(x => x)
                            .map(Number));

    let searchedElement = document.getElementById('num');
    let searchedValue = Number(searchedElement.value);

    let result = search(arr, searchedValue);

    if(result < 0) {
        result = `${searchedValue} is not in the array`;
    } else {
        result = `Found ${searchedValue} at index ${result}`;
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function search(collection, target) {
        let l = 0;
        let r = collection.length - 1;

        while(l <= r) {
            let m = Math.floor((l + r) / 2);
            let currentElement = collection[m];

            if (currentElement < target) {
                l = m + 1;
            } else if (currentElement > target) {
                r = m - 1;
            } else {
                return m;
            }
        }

        return -1;
    }
}