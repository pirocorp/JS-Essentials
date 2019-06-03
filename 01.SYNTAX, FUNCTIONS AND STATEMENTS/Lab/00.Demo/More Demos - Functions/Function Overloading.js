function increment(param) {
    if(Array.isArray(param)) {
        let result = [];

        for(let val of param){
            //In other languages we have Array, Stack, Queue and List
            //In JS we have array which is in the same time 
            //like above Data structures
            //push and pop Add or Remove item to the end of an array
            //unshift and shift Add or Remove item to the beginning of an array
            result.push(val + 1)
        }

        return result;
    } else {
        return param + 1;
    }
}

console.log(increment([5, 7, -1]));