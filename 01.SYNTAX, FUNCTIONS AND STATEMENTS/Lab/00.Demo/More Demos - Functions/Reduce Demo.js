function increment(param) {
    if (Array.isArray(param)) {
        //Acumolator -> acc, Curent value -> curr, index -> index Array -> arr
        //0 -> initial value of accumolator
        return param.reduce((acc, curr) => acc + curr, 0); 
    } else {
        return param + 1;
    }
}

console.log(increment([5, 7, -1]));