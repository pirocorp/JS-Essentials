function solve(str, count){
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;     
    }

    console.log(result);
}
solve('repeat', 5);