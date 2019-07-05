function solve(email) {
    const regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
    if(regex.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
solve('invalid@emai1.bg');