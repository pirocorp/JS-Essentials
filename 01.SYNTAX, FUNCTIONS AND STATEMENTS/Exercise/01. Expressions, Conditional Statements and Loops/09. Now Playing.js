/**
 * 
 * @param {Array} arr 
 */
function solve(arr){
    let trackName = arr[0];
    let artist = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`);
}

solve(['Number One', 'Nelly', '4:09']);