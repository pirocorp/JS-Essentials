function solve(n){
    let lines = +n;

    if(n % 2 == 0) {
        lines = +n - 1;
    }

    if(n === 2){
        console.log("+++");
        return
    }

    let middleLines = (lines - 3) / 2;

    for (let i = 0; i < 2; i++) {
        console.log(`+${"-".repeat(n - 2)}+${"-".repeat(n - 2)}+`);
        
        for (let i = 0; i < middleLines; i++) {
            console.log(`|${" ".repeat(n - 2)}|${" ".repeat(n - 2)}|`);          
        }
    }

    console.log(`+${"-".repeat(n - 2)}+${"-".repeat(n - 2)}+`);
}

solve(2);