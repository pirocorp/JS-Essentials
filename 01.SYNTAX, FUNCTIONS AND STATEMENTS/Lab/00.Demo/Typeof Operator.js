//The typeof operator returns a string indicating the type of operand

let val = 5; console.log(typeof (val));			    // number
let str = 'hello'; console.log(typeof (str));	    // string
let obj = { name: 'Maria', age: 18 };
console.log(typeof (obj)); 					        // object
let arr = [1, 2, 3]; console.log(typeof (arr));	    // object
let bool = true; console.log(typeof (bool));		// Boolean
let func = function () { };
console.log(typeof (func));					        // function
let date = new Date();
console.log(typeof (date));					        // object
console.log(typeof (notDeclaredVariable));          //undefined