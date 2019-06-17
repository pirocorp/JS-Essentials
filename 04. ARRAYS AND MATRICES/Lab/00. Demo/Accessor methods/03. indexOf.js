//The indexOf() method returns the first index at which a given 
//element can be found in the array, or -1 if it is not present.

//arr.indexOf(searchElement[, fromIndex]) <-- Syntax
function demo() {
    let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // expected output: 1

    // start from index 2
    console.log(beasts.indexOf('bison', 2));
    // expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // expected output: -1

    //Examples
    console.log('---Examles---');
    let array = [2, 9, 9];
    console.log(array.indexOf(2));     // 0
    console.log(array.indexOf(7));     // -1
    console.log(array.indexOf(9, 2));  // 2
    console.log(array.indexOf(2, -1)); // -1
    console.log(array.indexOf(2, -3)); // 0

    findingAllOccurrencesOfElement();
    findingElementExistsIfNotUpdateArray();
}
demo();

function findingAllOccurrencesOfElement() {
    let indices = [];
    let array = ['a', 'b', 'a', 'c', 'a', 'd'];
    let element = 'a';
    let idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    console.log(indices);
    // [0, 2, 4]
}

function findingElementExistsIfNotUpdateArray() {
    function updateVegetablesCollection(veggies, veggie) {
        if (veggies.indexOf(veggie) === -1) {
            veggies.push(veggie);
            console.log('New veggies collection is : ' + veggies);
        } else if (veggies.indexOf(veggie) > -1) {
            console.log(veggie + ' already exists in the veggies collection.');
        }
    }

    var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

    updateVegetablesCollection(veggies, 'spinach');
    // New veggies collection is : potato,tomato,chillies,green-pepper,spinach
    updateVegetablesCollection(veggies, 'spinach');
    // spinach already exists in the veggies collection.
}