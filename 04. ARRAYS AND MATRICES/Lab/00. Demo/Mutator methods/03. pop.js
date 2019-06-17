//The pop() method removes the last element from 
//an array and returns that element. 
//This method changes the length of the array.

//arr.pop()
function demo(){
    let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    // expected output: "tomato"

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

    plants.pop();

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage"]

    usingInArrayLikeObject();
}
demo();

function usingInArrayLikeObject() {
    let myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4 };

    let popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

    console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3} 

    console.log(popped); // 'sturgeon'
}