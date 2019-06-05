/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let day = +arr[0];
    let month = +arr[1];
    let year = +arr[2];

    if(month === 3){
        if (leapYear(year)) {
            console.log(29);
        } else {
            console.log(28);
        }

        return;
    }

    if(month === 10 || month === 12 || month === 5 || month === 7) {
        console.log(30);
        return
    }

    console.log(31)

    function leapYear(year) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

solve([13, 12, 2004]);