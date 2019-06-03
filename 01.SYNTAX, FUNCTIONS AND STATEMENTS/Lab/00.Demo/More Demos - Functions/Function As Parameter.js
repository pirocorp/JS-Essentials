function increment(param) {
    if (Array.isArray(param)) {
        return param.map(x => x + 1); //Like Select in C# and Map in Java
    } else {
        return param + 1;
    }
}

console.log(increment([5, 7, -1]));