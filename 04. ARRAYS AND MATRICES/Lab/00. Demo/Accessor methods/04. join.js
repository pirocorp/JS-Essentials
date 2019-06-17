//The join() method creates and returns a new string by 
//concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a 
//specified separator string. If the array has only one item, 
//then that item will be returned without using the separator.

//arr.join([separator])
function demo() {
    let elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"

    //Examples
    joiningArrayFourDifferentWays();
    joiningArrayLikeObject();
}
demo();

function joiningArrayFourDifferentWays() {
    let a = ['Wind', 'Water', 'Fire'];
    console.log(a.join());      // 'Wind,Water,Fire'
    console.log(a.join(', '));  // 'Wind, Water, Fire'
    console.log(a.join(' + ')); // 'Wind + Water + Fire'
    console.log(a.join(''));    // 'WindWaterFire'
}

//The following example joins array-like object (arguments), 
//by calling Function.prototype.call on Array.prototype.join.
function joiningArrayLikeObject() {
    function f(a, b, c) {
        var s = Array.prototype.join.call(arguments);
        console.log(s); // '1,a,true'
    }
    
    f(1, 'a', true);
    //expected output: "1,a,true"
}