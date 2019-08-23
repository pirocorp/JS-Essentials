Questions JS
//1. Name two ways to dynamically add the the value "bar" to the array "foo";
A: foo.push('bar');
A: foo[0] = 'bar';
A: foo[foo.length] = 'bar';
//2. Of what JS type is Array?;
A: Object
//3. What property tells you the length of JS Array?
A: array.length;
//4. If the array "foo" has a length of 10, what is the index of the first element in the Array?
//A: 0
//5. If the array "foo" has a length of 10, what is the index of the last element in the Array?
//A: 9
//6. What is the syntax you would use to assign the first element in the array "foo" to the variable  "bar"?
A: foo[0] = bar;
A: foo.unshift(bar);
//7. Given the following code what is the length of the array "foo"? var foo = [];
//A: 0
//8. What does the array.shift() method do, and what does it return?
//A: Removes the first element from Array and returns it
//9. Given the following line of code, what would be the output of the console?
//Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1() {
	return {
		bar: "hello"
	};
}

function foo2() {
	return 
	{
		bar: "hello"
	};
}

//A: Second function deos return undefined because code after return is unreachable

//10. What whill code below output to the console and why?
console.log(1 + "2" + "2");			A: "122"
console.log(1 + +"2" + "2");		A: "32"
console.log(1 + -"1" + "2");		A: "02"
console.log(+"1" + "1" + "2");		A: "112"
console.log("A" - "B" + "2");		A: "NaN2" //Because string - string gives NaN and NaN + string gives NaN2
console.log("A" - "B" + 2);			A: "NaN"  //NaN + Number gives NaN

//11. How do you clone an object?
//A: Every kvp in first object get copied to second object
//12. What do the following lines output, and why?
console.log(1 < 2 < 3);				A: true		//Because 1 < 2 is true and true < 3 is true
console.log(3 > 2 > 1);				A: false  	//Because 3 > 2 is true but true > 1 is not true
//13. What is hoisting?
//A: hoisted/lifted to the top of functional/local scope (if declared inside a function) or to the top of global scope (if declared outside of a function) regardless of where the actual declaration has been made. 
//A: Function expressions are not hoisted Function declarations are hoisted

