let x, y; //Declare variables
var b = 10; //Declare Global Context Variable

//Assign values
let a = 5; 
a = "Pesho";
a = [1, 2, 3];
a = 10;

//Calcuclate values
let d = a + b;

//Print values
console.log(d); //20

//Declaring object as constant
const c = {
    name: "Pesho"
};

//Changing value of field name of object c which is constant 
//Values of fields of const object can be changed
c.name = "Hristo"

//Can be added aditional field to object constant
c.age = 25;

//Tyes of JS: String, Number, Object, Array;
//Declaring Array
let array = ["Kiro", "Bozho", "Rosen"];

//Add element to Array
//Push returns lenght of array
array.push("Ivan"); //4

//Using indexator of array as in C#
array[2]; //Rosen

//Array can be used as associative array (Dictionary in C#, Map in Java)
array["CEO"] = "Georgi" //"Georgi"
console.log(array); //["Kiro", "Bozho", "Rosen", "Ivan", CEO: "Georgi"]

//Boolea values true and false;
console.log("0" == true);  //false
console.log("0" == false); //true
console.log("1" == true);  //true

//operator == is calling toString method of array and comparing 
//left side and right side
console.log([] == true);        //false
console.log([] == false);       //true
console.log([1, 2] == true);    //false
console.log([1, 2] == false);   //false

console.log("" == true);    //false
console.log("" == false);   //true

console.log("1, 2" == true);    //false
console.log("1, 2" == false);   //false

console.log(null == false || null == true);             //false
console.log(undefined == false || undefined == true);   //false

//In reality this is not TRUE :D
console.log(null == undefined) //true;

//Integers
let f = 0; let g = 16; let h = -528;    //Decimal, base10
f = 015; g = 0001; h = -0o77;           //Octal, base8
f = 0x1123; g = 0x00111; h = -0xF1A7;   //Hexadecimal, "hex" or base16
f = 0b11; g = 0b0011; h = -0b11;        //Binary, base2

console.log(-"213" + 13);   //-200
console.log(2 - "5");       //-3
console.log(2 + "5");       //25 -> Makes string concatenation
console.log(2 - "-5");      //7

//Objects
//Objects act like collection of key-value paires
console.log({});
console.log({name: "Pesho", age:25});

let v = {
    name: "Ivan",
    age: 30
};

console.log(v);

v.numberOfLegs = 5;     //Add new property
v["numberOfLegs"] = 5;  //Add new property

console.log(v);
console.log(v.numberOfLegs);    //Access property
console.log(v["numberOfLegs"]); //Access property

//Regex
let pattern = /[a-z]+/;
console.log(pattern.test("abc")); //true
console.log(pattern.exec("abc"));

//Strings are immutable in JS
//JS Special characters: \b, \n, \t, \v, \', \", \\

//String Interpolation (2016+ ECMA Script)
let inter = "interpolation";
console.log(`String ${inter} in JS`)

//functions
//Testing system supports only one function on top level
function main() { //main because I'm C# fen
    function sumTwoNumbers(a, b) {
        return a + b;
    }

    console.log(sumTwoNumbers(5, 6));
}

main();