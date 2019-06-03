function printTriangle(count) {
    function printStars(count) {
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= count; i++) {
        printStars(i);
    }

    for (let i = count - 1; i > 0; i--) {
        printStars(i);
    }
}

printTriangle(3);