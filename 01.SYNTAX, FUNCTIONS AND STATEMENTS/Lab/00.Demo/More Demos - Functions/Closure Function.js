(function increment(n) {
    console.log(n+1);
})(5);

//We have no Acces to IIFE after invocation
//increment(10);

//This is closure -> this is how can be make encapsulation
//We are encapsulated some state in function
//Internal function is in scope of parent fuction elements
//We have no reference to external function so it's elements are not accessible
//
let f = (function(counter) {
    return function () {
        console.log(++counter);
    };
})(6);

f();
f();