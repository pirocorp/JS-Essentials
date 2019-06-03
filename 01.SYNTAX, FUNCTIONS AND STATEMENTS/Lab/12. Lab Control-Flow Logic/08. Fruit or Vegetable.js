function solve(input) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetable = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if(fruits.some(x => x === input)) {
        console.log("fruit");
        return
    }

    if(vegetable.some(x => x === input)) {
        console.log("vegetable");
        return
    }

    console.log("unknown");
}

solve("pizza");