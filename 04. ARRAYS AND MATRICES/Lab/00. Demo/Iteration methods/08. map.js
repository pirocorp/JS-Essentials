//The map() method creates a new array with the results of 
//calling a provided function on every element in the calling array.

//map does not mutate the array on which it is called (although callback, if invoked, may do so).

//var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
//}[, thisArg])
function demo() {
    let array1 = [1, 4, 9, 16];

    // pass a function to map
    let map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]

    //Examles
    mappingArray();
    reformatObjects();
    mappingArrayOfNumbersUsingFunctionContainingArgument();
    usingMapGenerically();
    //mapQquerySelectorAll();
    trickyUseCase();
}
demo();

function mappingArray() {
    let numbers = [1, 4, 9];
    let roots = numbers.map(function (num) {
        return Math.sqrt(num)
    });

    console.log(numbers);
    console.log(roots);
    // roots is now [1, 2, 3]
    // numbers is still [1, 4, 9]
}

function reformatObjects() {
    let kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

    let reformattedArray = kvArray.map(obj => {
        let rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
    });
    // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

    // kvArray is still: 
    // [{key: 1, value: 10}, 
    //  {key: 2, value: 20}, 
    //  {key: 3, value: 30}]

    console.log(kvArray);
    console.log(reformattedArray);
}

function mappingArrayOfNumbersUsingFunctionContainingArgument() {
    let numbers = [1, 4, 9];
    let doubles = numbers.map(function (num) {
        return num * 2;
    });

    // doubles is now [2, 8, 18]
    // numbers is still [1, 4, 9]
    console.log(numbers);
    console.log(doubles);
}

function usingMapGenerically() {
    let map = Array.prototype.map;
    let a = map.call('Hello World', function (x) {
        return x.charCodeAt(0);
    });

    console.log(a);
    // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
}

function mapQquerySelectorAll() {
    let elems = document.querySelectorAll('select option:checked');
    let values = Array.prototype.map.call(elems, function (obj) {
        return obj.value;
    });
}

//It is common to use the callback with one argument 
//(the element being traversed). Certain functions are also 
//commonly used with one argument, even though they take 
//additional optional arguments. These habits may lead to 
//confusing behaviors.
function trickyUseCase() {
    // Consider:
    console.log(['1', '2', '3'].map(parseInt));
    // While one could expect [1, 2, 3]
    // The actual result is [1, NaN, NaN]

    // parseInt is often used with one argument, but takes two.
    // The first is an expression and the second is the radix.
    // To the callback function, Array.prototype.map passes 3 arguments: 
    // the element, the index, the array
    // The third argument is ignored by parseInt, but not the second one,
    // hence the possible confusion. See the blog post for more details
    // If the link doesn't work
    // here is concise example of the iteration steps:
    // parseInt(string, radix) -> map(parseInt(value, index))
    // first iteration (index is 0): parseInt('1', 0) // results in parseInt('1', 0) -> 1
    // second iteration (index is 1): parseInt('2', 1) // results in parseInt('2', 1) -> NaN
    // third iteration (index is 2): parseInt('3', 2) // results in parseInt('3', 2) -> NaN

    function returnInt(element) {
        return parseInt(element, 10);
    }

    console.log(['1', '2', '3'].map(returnInt)); // [1, 2, 3]
    // Actual result is an array of numbers (as expected)

    // Same as above, but using the concise arrow function syntax
    console.log(['1', '2', '3'].map(str => parseInt(str)));

    // A simpler way to achieve the above, while avoiding the "gotcha":
    console.log(['1', '2', '3'].map(Number)); // [1, 2, 3]
    // but unlike `parseInt` will also return a float or (resolved) exponential notation:
    console.log(['1.1', '2.2e2', '3e300'].map(Number)); // [1.1, 220, 3e+300]

    var xs = ['10', '10', '10'];

    xs = xs.map(parseInt);

    console.log(xs); // Actual result of 10,NaN,2 may be unexpected based on the above description.
}

