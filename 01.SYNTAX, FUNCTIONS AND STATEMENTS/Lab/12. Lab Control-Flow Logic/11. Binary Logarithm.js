/**
 * 
 * @param {Array} input 
 */
function log(input) {
    let results = input.map(e => Math.log2(e));
    for (const res of results) {
        console.log(res);
    }  
}

log([2, 4, 8, 16, 24]);