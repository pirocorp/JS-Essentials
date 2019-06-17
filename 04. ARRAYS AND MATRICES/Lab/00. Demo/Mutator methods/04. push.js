//The push() method adds one or more elements to the end
//of an array and returns the new length of the array.

//arr.push(element1[, ...[, elementN]]) <-- Syntax
function demo() {
    let animals = ['pigs', 'goats', 'sheep'];

    console.log(animals.push('cows'));
    // expected output: 4

    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens');

    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

    //Examples
    let sports = ['soccer', 'baseball'];
    let total = sports.push('football', 'swimming');

    console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
    console.log(total);  // 4

    mergingTwoArrays();
    usingAnObjectInAnArrayLikeFashion();
}
demo();

function mergingTwoArrays() {
    //This example uses apply() to push all elements from a second array.

    //Do not use this method if the second array(moreVegs in the example) 
    //is very large, because the maximum number of parameters that one function 
    //can take is limited in practice. See apply() for more details.

    let vegetables = ['parsnip', 'potato'];
    let moreVegs = ['celery', 'beetroot'];

    // Merge the second array into the first one
    // Equivalent to vegetables.push('celery', 'beetroot');
    Array.prototype.push.apply(vegetables, moreVegs);

    console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
}

function usingAnObjectInAnArrayLikeFashion () {
    //Note that we don't create an array to store a collection of objects. 
    //Instead, we store the collection on the object itself and use call on 
    //Array.prototype.push to trick the method into thinking we are dealing with an array, 
    //and it just works, thanks to the way JavaScript allows us to establish the 
    //execution context however we please.
    
    //Note that although obj is not an array, the method push successfully incremented obj's 
    //length property just like if we were dealing with an actual array.

    let obj = {
        length: 0,

        addElem: function addElem(elem) {
            // obj.length is automatically incremented 
            // every time an element is added.
            [].push.call(this, elem);
        }
    };

    // Let's add some empty objects just to illustrate.
    obj.addElem({});
    obj.addElem({});
    console.log(obj.length);
    // → 2
}