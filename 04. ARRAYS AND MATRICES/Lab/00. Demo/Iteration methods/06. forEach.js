//The forEach() method executes a provided function 
//once for each array element.

//forEach() does not mutate the array on which it is called (although callback, if invoked, may do so).

//There is no way to stop or break a forEach() loop other than by throwing an exception. 
//If you need such behavior, the forEach() method is the wrong tool.

//arr.forEach(callback(currentValue [, index [, array]])[, thisArg]); <-- Syntax
function demo() {
    let array1 = ['a', 'b', 'c'];

    array1.forEach(function (element) {
        console.log(element);
    });

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

    //Examples
    convertingForLoopToForEach();
    printingContentsOfArray();
    usingThisArg();
    anObjectCopyFunction();
    ifArraIsModifiedDuringIterationElementsMightBeSkipped();
    flattenArray();
}
demo();

function convertingForLoopToForEach() {
    let items = ['item1', 'item2', 'item3'];
    let copy = [];

    // before
    for (let i = 0; i < items.length; i++) {
        copy.push(items[i]);
    }

    // after
    items.forEach(function (item) {
        copy.push(item);
    });

    //Arrow function
    items.forEach(x => copy.push(x));
}

function printingContentsOfArray() {
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }

    // Notice that index 2 is skipped since there is no item at
    // that position in the array.
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9
}

//The following (contrived) example updates an object's properties 
//from each entry in the array
function usingThisArg() {
    function Counter() {
        this.sum = 0;
        this.count = 0;
    }
    Counter.prototype.add = function (array) {
        array.forEach(function (entry) {
            this.sum += entry;
            ++this.count;
        }, this);
        // ^---- Note
    };

    const obj = new Counter();
    obj.add([2, 5, 9]);
    obj.count;
    // 3 
    obj.sum;
    // 16
}

function anObjectCopyFunction() {
    function copy(obj) {
        let copy = Object.create(Object.getPrototypeOf(obj));
        let propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(function (name) {
            let desc = Object.getOwnPropertyDescriptor(obj, name);
            Object.defineProperty(copy, name, desc);
        });

        return copy;
    }

    let obj1 = { a: 1, b: 2 };
    let obj2 = copy(obj1); // obj2 looks like obj1 now
}

//The following example logs "one", "two", "four". 
//When the entry containing the value "two" is reached, 
//the first entry of the whole array is shifted off, 
//which results in all remaining entries moving up one position. 
//Because element "four" is now at an earlier position in the array, 
//"three" will be skipped. forEach() does not make a copy of the 
//array before iterating.
function ifArraIsModifiedDuringIterationElementsMightBeSkipped() {
    let words = ['one', 'two', 'three', 'four'];
    words.forEach(function (word) {
        console.log(word);
        if (word === 'two') {
            words.shift();
        }
    });
    // one
    // two
    // four
}

function flattenArray() {
    /**
     * Flattens passed array in one dimensional array
     *
     * @params {array} arr
     * @returns {array}
     */
    function flatten(arr) {
        let result = []

        arr.forEach((i) => {
            if (Array.isArray(i)) {
                result.push(...flatten(i))
            } else {
                result.push(i)
            }
        })

        return result
    }

    // Usage
    let problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

    console.log(flatten(problem)); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 
}