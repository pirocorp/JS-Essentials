//The ? is ternary operator
//The == means "equal after type conversion"
//The === means "equal and of the same type"
//The != means "not equal after type conversion"
//The !== means "not equal and of the same type"
//The > means "greater than"
//The < means "less than"
//The >= means "greater than or equal to"
//The <= means "less than or equal to"

let a = 5, b = 4;
console.log(a == b);		// false
console.log(0 === "");	    // false
console.log(a != b);		// true
console.log(3 !== "3");	    // true
console.log(a < "5.5"); 	// true
console.log(a >= b);		// true
console.log(0 == []);		// true
console.log(a ? b : 10);	// 4