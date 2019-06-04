/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let direction = arr[0];
    let destination = arr[1];
    let time = arr[2];
    let flight = arr[3];
    let gate = arr[4];

    console.log(`${direction}: Destination – ${destination}, Flight – ${flight}, Time – ${time}, Gate - ${gate}`)
}

solve(['Arrivals', 'Paris', '02:22', 'VD17', '3']);