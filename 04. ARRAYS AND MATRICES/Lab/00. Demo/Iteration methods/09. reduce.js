//The reduce() method executes a reducer function (that you provide) 
//on each element of the array, resulting in a single output value.

//arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])
function demo() {
    let array1 = [1, 2, 3, 4];
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15  

    let maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
    let maxCallback2 = (max, cur) => Math.max(max, cur);

    // reduce() without initialValue
    [{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
    [{ x: 22 }].reduce(maxCallback); // { x: 22 }
    //[].reduce(maxCallback); // TypeError

    // map/reduce; better solution, also works for empty or larger arrays
    [{ x: 22 }, { x: 42 }].map(el => el.x)
        .reduce(maxCallback2, -Infinity);

    //Examples
    sumAllValuesOfArray();
    sumValuesInArray();
    flattenArrayOfArrays();
    countingInstancesOfValuesInObject();
    groupingObjectsByProperty();
    bondArraysContainedArray();
    removeDuplicateItemsInArray();
    runningPromisesInSequence();
    functionCompositionEnablingPiping();
    writeMapUsingReduce();
}
demo();

function sumAllValuesOfArray() {
    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log(sum);
    // sum is 6

    let total = [0, 1, 2, 3].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    console.log(total);
}

//To sum up the values contained in an array of objects, 
//you must supply an initialValue, so that each item passes 
//through your function.
function sumValuesInArray() {
    let initialValue = 0;
    let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x;
    }, initialValue)

    console.log(sum) // logs 6

    //Alternatively written with an arrow function:
    sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
        (accumulator, currentValue) => accumulator + currentValue.x
        , initialValue
    );

    console.log(sum) // logs 6
}

function flattenArrayOfArrays() {
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        function (accumulator, currentValue) {
            return accumulator.concat(currentValue);
        },
        []
    );

    console.log(flattened);
    // flattened is [0, 1, 2, 3, 4, 5]  

    //Alternatively written with an arrow function
    flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
    );

    console.log(flattened);
}

function countingInstancesOfValuesInObject() {
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    let countedNames = names.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});
    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    console.log(countedNames);
}

function groupingObjectsByProperty() {
    let people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];

    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    let groupedPeople = groupBy(people, 'age');
    console.log(groupedPeople);
    // groupedPeople is:
    // { 
    //   20: [
    //     { name: 'Max', age: 20 }, 
    //     { name: 'Jane', age: 20 }
    //   ], 
    //   21: [{ name: 'Alice', age: 21 }] 
    // }
}

function bondArraysContainedArray() {
    // friends - an array of objects 
    // where object field "books" - list of favorite books 
    var friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }];

    // allbooks - list which will contain all friends' books +  
    // additional list contained in initialValue
    var allbooks = friends.reduce(function (accumulator, currentValue) {
        return [...accumulator, ...currentValue.books];
    }, ['Alphabet']);

    console.log(allbooks);
    // allbooks = [
    //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
    //   'Romeo and Juliet', 'The Lord of the Rings',
    //   'The Shining'
    // ]
}

function removeDuplicateItemsInArray() {
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator
    }, [])

    console.log(myOrderedArray);
}

function runningPromisesInSequence() {
    /**
     * Runs promises from array of functions that can return promises
     * in chained manner
     *
     * @param {array} arr - promise arr
     * @return {Object} promise object
     */
    function runPromiseInSequence(arr, input) {
        return arr.reduce(
            (promiseChain, currentFunction) => promiseChain.then(currentFunction),
            Promise.resolve(input)
        );
    }

    // promise function 1
    function p1(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 5);
        });
    }

    // promise function 2
    function p2(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 2);
        });
    }

    // function 3  - will be wrapped in a resolved promise by .then()
    function f3(a) {
        return a * 3;
    }

    // promise function 4
    function p4(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 4);
        });
    }

    const promiseArr = [p1, p2, f3, p4];
    runPromiseInSequence(promiseArr, 10)
        .then(console.log);   // 1200
}

function functionCompositionEnablingPiping() {
    // Building-blocks to use for composition
    const double = x => x + x;
    const triple = x => 3 * x;
    const quadruple = x => 4 * x;

    // Function composition enabling pipe functionality
    const pipe = (...functions) => input => functions.reduce(
        (acc, fn) => fn(acc),
        input
    );

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple);
    const multiply9 = pipe(triple, triple);
    const multiply16 = pipe(quadruple, quadruple);
    const multiply24 = pipe(double, triple, quadruple);

    // Usage
    multiply6(6); // 36
    multiply9(9); // 81
    multiply16(16); // 256
    multiply24(10); // 240
}

function writeMapUsingReduce() {
    if (!Array.prototype.mapUsingReduce) {
        Array.prototype.mapUsingReduce = function (callback, thisArg) {
            return this.reduce(function (mappedArray, currentValue, index, array) {
                mappedArray[index] = callback.call(thisArg, currentValue, index, array);
                return mappedArray;
            }, []);
        };
    }

    [1, 2, , 3].mapUsingReduce(
        (currentValue, index, array) => currentValue + index + array.length
    ); // [5, 7, , 10]
}