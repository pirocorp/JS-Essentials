function solve(n) {
    console.log("<ul>");
    for (let i = 0; i < n; i++) {
        let color = '';
        
        if(i % 2 == 0) {
            color = "green";
        } else {
            color = "blue";
        }
        
        console.log(`<li><span style='color:${color}'>${i + 1}</span></li>`);    
    }

    console.log("</ul>");
}

solve(10);