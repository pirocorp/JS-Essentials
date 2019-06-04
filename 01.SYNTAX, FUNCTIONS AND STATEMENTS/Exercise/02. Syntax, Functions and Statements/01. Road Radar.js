/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let speed = +arr[0];
    let area = arr[1];
    let speedLimit = getSpeedLimit(area);

    let speeding = speed - speedLimit;

    if (speeding <= 0) {
        return
    }

    if (speeding <= 20) {
        console.log("speeding");
    } else if (speeding <= 40){
        console.log("excessive speeding");
    } else {
        console.log("reckless driving");
    }

    function getSpeedLimit(area) {
        let arr = { 
            "motorway": 130,
            "interstate": 90,
            "city": 50,
            "residential": 20
        }

        return arr[area];
    }
}

solve([200, 'motorway']);