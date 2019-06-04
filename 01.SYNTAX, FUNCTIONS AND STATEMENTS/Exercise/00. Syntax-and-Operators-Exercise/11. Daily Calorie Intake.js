/**
 * 
 * @param {Array} arr 
 * @param {Number} workouts 
 */
function solve(arr, workouts) {
    let sex = arr[0];
    let weight = arr[1];
    let height = arr[2];
    let age = arr[3];

    let calories = 0;

    if(sex === "m") {
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    } else {
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }

    let activeFactor = 1.2;

    if(workouts > 0 && workouts <= 2) {
        activeFactor = 1.375;
    } else if (workouts > 2 && workouts <= 5) {
        activeFactor = 1.55;
    } else if (workouts > 5 && workouts <= 7) {
        activeFactor = 1.725;
    } else if (workouts > 7) {
        activeFactor = 1.90;
    }

    let result = Math.round(calories * activeFactor);

    console.log(`My calorie intake is ${result}`)
}

solve(['m', 86, 185, 25], 3);