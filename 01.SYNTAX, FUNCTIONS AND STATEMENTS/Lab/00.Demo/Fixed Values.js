//Array Literals:  list of zero or more array element, enclosed in square brackets ([ ])

let cars = ["Ford", "BMW", "Peugeot"]
let arrayLength = cars.length;		
console.log(arrayLength);           // 3
let secondCar = cars[1];	
console.log(secondCar);             // "BMW"        

//Boolean Literals: two literal values – true and false
console.log("0" == true);				        // false
console.log("0" == false);				        // true
if ("0") { console.log(true) };			        // true
console.log([] == true);				        // false
console.log([] == false);				        // true
if ([]) { console.log(true) };			        // true
console.log(null == false || null == true); 	// false
if (!null) { console.log(true) }; 	            // true

//Object Literals: 
//List of zero or more pairs of property names 
//Associated values of an object, enclosed in curly braces { }
let car = { type: "Infinity", model: "QX80", color: "blue" };
let carType = car.type;
carType = car["type"];	// Access property
console.log(car);
car.year = 2018;
car["year"] = 2018; // Add new property
console.log(car);
car.color = "black";
car["color"] = "black"; // Correct existing property
console.log(car);

//RegExp Literals: pattern enclosed between slashes (/ /)
let pattern = /[A-Za-z]+/;

//String Literals: immutable sequences of Unicode characters 
//JavaScript special characters: \b, \n, \t, \v, \', \", \\

let str = "Infinity QX80";
console.log(str.length); // 13
console.log(str[0]);	// I
str[0] = 's'; // Beware: no error, but str stays unchanged!
console.log(str); // "Infinity QX80"
console.log(str[20]); // undefined
