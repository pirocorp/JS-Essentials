//The reduceRight() method applies a function against an accumulator 
//and each value of the array (from right-to-left) to reduce 
//it to a single value.

//arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue]) <-- Syntax
function demo() {
    let array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
        (accumulator, currentValue) => accumulator.concat(currentValue)
    );

    console.log(array1);
    // expected output: Array [4, 5, 2, 3, 0, 1]

    sumUpAllValuesInArray();
    flattenArrayOfArrays();
    runListOfAsyncFunctions();
    differenceBetweenReduceAndReduceRight();
    definingComposibleFunction();
}
demo();

function sumUpAllValuesInArray() {
    let sum = [0, 1, 2, 3].reduceRight(function (a, b) {
        return a + b;
    });

    console.log(sum);
    // sum is 6
}

function flattenArrayOfArrays() {
    let flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function (a, b) {
        return a.concat(b);
    }, []);

    console.log(flattened);
    // flattened is [4, 5, 2, 3, 0, 1]
}

function runListOfAsyncFunctions() {
    let waterfall = (...functions) => (callback, ...args) =>
        functions.reduceRight(
            (composition, fn) => (...results) => fn(composition, ...results),
            callback
        )(...args);

    let randInt = max => Math.floor(Math.random() * max)

    let add5 = (callback, x) => {
        setTimeout(callback, randInt(1000), x + 5);
    };
    let mult3 = (callback, x) => {
        setTimeout(callback, randInt(1000), x * 3);
    };
    let sub2 = (callback, x) => {
        setTimeout(callback, randInt(1000), x - 2);
    };
    let split = (callback, x) => {
        setTimeout(callback, randInt(1000), x, x);
    };
    let add = (callback, x, y) => {
        setTimeout(callback, randInt(1000), x + y);
    };
    let div4 = (callback, x) => {
        setTimeout(callback, randInt(1000), x / 4);
    };

    let computation = waterfall(add5, mult3, sub2, split, add, div4);
    computation(console.log, 5) // -> 14

    // same as:

    let computation2 = (input, callback) => {
        let f6 = x => div4(callback, x);
        let f5 = (x, y) => add(f6, x, y);
        let f4 = x => split(f5, x);
        let f3 = x => sub2(f4, x);
        let f2 = x => mult3(f3, x);
        add5(f2, input);
    }
}

function differenceBetweenReduceAndReduceRight() {
    let a = ['1', '2', '3', '4', '5'];
    let left = a.reduce(function (prev, cur) { return prev + cur; });
    let right = a.reduceRight(function (prev, cur) { return prev + cur; });

    console.log(left);  // "12345"
    console.log(right); // "54321"
}

function definingComposibleFunction() {
    /**
     * Function Composition is way in which result of one function can
     * be passed to another and so on.
     *
     * h(x) = f(g(x))
     *
     * Function execution happens right to left
     *
     * https://en.wikipedia.org/wiki/Function_composition
     */

    let compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

    // Increament passed number
    const inc = (n) => n + 1

    // Doubles the passed value
    const double = (n) => n * 2

    // using composition function
    console.log(compose(double, inc)(2)); // 6

    // using composition function
    console.log(compose(inc, double)(2)); // 5
}