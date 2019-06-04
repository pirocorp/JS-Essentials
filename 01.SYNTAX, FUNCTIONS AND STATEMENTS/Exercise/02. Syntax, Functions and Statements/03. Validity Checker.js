/**
 * 
 * @param {Array} cordinates 
 */
function solve(cordinates) {
    let x1 = +cordinates[0];
    let y1 = +cordinates[1];
    let x2 = +cordinates[2];
    let y2 = +cordinates[3];

    let pointOneDistanceToCenter = distanceBetweenTwoPoints(x1, y1, 0, 0);
    let pointTwoDistanceToCenter = distanceBetweenTwoPoints(x2, y2, 0, 0);
    let distanceBetweenPoints = distanceBetweenTwoPoints(x1, y1, x2, y2);
    
    validateDistance(x1, y1, 0, 0, pointOneDistanceToCenter);
    validateDistance(x2, y2, 0, 0, pointTwoDistanceToCenter);
    validateDistance(x1, y1, x2, y2, distanceBetweenPoints);

    function validateDistance(x1, y1, x2, y2, distance) {
        if (distance % 1 !== 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
    }

    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
}

solve([3, 0, 0, 4])