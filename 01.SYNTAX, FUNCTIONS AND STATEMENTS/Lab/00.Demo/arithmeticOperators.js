let a = 15;
let b = 5;
let c;
c = a + b; //20
c = a - b; //10
c = a * b; //75
c = a / b; //3
c = a % b; //0
c = a ** b; //759375 -> exponent (^)

console.log(3 + 4 - 2);             // 5 (add / substract numbers)                             
console.log(5 / 0);                 // Infinity (divide by zero)
console.log(Infinity / Infinity);   // NaN (wrong division)                   
console.log(Math.round(7 / 3));     // 2 (integral division)               
console.log(Math.ceil(7 / 3));      // 3 (integral division)               
console.log(Math.floor(7 / 3));     // 2 (integral division)               
console.log(7 % 3);                 // 1 (reminder of division)   
console.log(5.3 % 3);               // 2.3 (reminder of division)       
a = 5;                              //
console.log(++a);                   // 6 (prefixed ++)    
console.log(a++);                   // 6 (postfix ++) 