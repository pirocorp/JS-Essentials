//Logical operators are used to determine the logic between variables or values

//&& (logical and) -  returns the leftmost "false" value:
let val = true && 'yes' && 5 && null && false;
console.log(val); // null
val = true && 'no' && 5 && 25 && 'yes';
//If all values are true, return the last value
console.log(val); // 'yes'

//|| (logical or) - operators returns the leftmost "true" value:
val = false || 0 || '' || 5 || 'hi' || true;
console.log(val); // 5
val = false || '' || null || NaN || undefined;
//If all values are false, return the last value
console.log(val); // undefined

//! (logical not) – convert the operand to Boolean type: true/false
val = !true
console.log(val); // false
val = !false;
console.log(val); // true