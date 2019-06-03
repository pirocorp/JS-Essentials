function aggregate (arr) {
    function aggregate(elements, acc, func) {
        for(let e of elements) {
            acc = func(acc, e);
        }

        return acc;
    }

    console.log(aggregate(arr, 0, (a, b) => a + b));
    console.log(aggregate(arr, 0, (a, b) => a + 1 / b));
    console.log(aggregate(arr, [], (a, b) => a + b));
    /* console.log(aggregate(arr, 1, (a, b) => a * b)); */
}

aggregate([1, 2, 3, 4, 5]);