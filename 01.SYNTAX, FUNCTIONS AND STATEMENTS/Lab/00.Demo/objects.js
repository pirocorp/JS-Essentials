let array = [1, 2];
let obj = {name: "Pesho"};
let num = 5;
let string = 'ASD';

array['asd'] = 25;
obj['asd'] = 25;
num['asd'] = 25;
string['asd'] = 25;

console.log(array['asd']);
console.log(obj['asd']);
console.log(num['asd']);
console.log(string['asd']);

//Despite that everything is "Object" in JS  
//you can't add properties to primitive types
//btw strings and nymbers are immutable