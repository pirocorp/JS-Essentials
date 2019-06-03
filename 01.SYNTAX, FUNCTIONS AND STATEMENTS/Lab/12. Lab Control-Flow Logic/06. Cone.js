/**
 * 
 * @param {Number} r 
 * @param {Number} h 
 */
function cone(r, h) {
    let volume = (Math.PI*r*r*h) / 3;
    let surface = Math.PI*r*r + Math.PI*r*(Math.sqrt(h*h + r*r));

    console.log(volume);
    console.log(surface);
}

cone(3, 5);