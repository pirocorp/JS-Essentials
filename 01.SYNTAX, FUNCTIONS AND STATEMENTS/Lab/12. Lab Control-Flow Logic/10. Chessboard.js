function chessBoard(n) {
    let lastColor = "black";
    console.log("<div class=\"chessboard\">");

    for (let row = 0; row < n; row++) {
        console.log("  <div>");
        for (let col = 0; col < n; col++) {
            
            if (n % 2 === 0 && row > 0 && col === 0) {
                lastColor = invertColor(lastColor);
            }

            console.log(`    <span class="${lastColor}"></span>`)
            lastColor = invertColor(lastColor);
        }
        console.log("  </div>");
    }

    console.log("</div>");

    function invertColor(color) {
        if (color === "black") {
            return color = "white"
        } else {
            return color = "black";
        }
    }
}
 
chessBoard(4);