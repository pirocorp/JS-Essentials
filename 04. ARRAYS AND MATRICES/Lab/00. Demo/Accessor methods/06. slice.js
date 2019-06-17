//The slice() method returns a shallow copy of a portion 
//of an array into a new array object selected from begin 
//to end (end not included). The original array will not be modified.

//arr.slice([begin[, end]]) <-- Syntax
function demo() {
    let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    //Examples
    prtionOfArray();
    usingSlice();
    arrayLikeObjects();
}
demo();

function prtionOfArray() {
    let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    let citrus = fruits.slice(1, 3);

    console.log(citrus);

    // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
    // citrus contains ['Orange','Lemon']
}

function usingSlice() {
    console.log('---Using Slice---')

    // Using slice, create newCar from myCar.
    let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
    let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
    let newCar = myCar.slice(0, 2);

    // Display the values of myCar, newCar, and the color of myHonda
    //  referenced from both arrays.
    console.log('myCar = ' + JSON.stringify(myCar));
    console.log('newCar = ' + JSON.stringify(newCar));
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);

    // Change the color of myHonda.
    myHonda.color = 'purple';
    console.log('The new color of my Honda is ' + myHonda.color);

    // Display the color of myHonda referenced from both arrays.
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);
}

//slice method can also be called to convert Array-like objects / 
//collections to a new Array. You just bind the method to the object. 
//The arguments inside a function is an example of an 'array-like object'.
function arrayLikeObjects() {
    function list() {
        return Array.prototype.slice.call(arguments);
    }

    let list1 = list(1, 2, 3); // [1, 2, 3]
    console.log(list1);
}