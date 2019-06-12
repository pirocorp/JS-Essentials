function solve() {
    let targetElement = document.getElementById('exercise').children[0];

/*     let randomMarginTop = getRandomInteger(1, 81);
    let randomMarginLeft = getRandomInteger(1, 45);

    let marginTop = `${randomMarginTop}%`;
    let marginLeft = `${randomMarginLeft}vh`;

    targetElement.style.marginTop = marginTop;
    targetElement.style.marginLeft = marginLeft; */

    setTimeout(() => {
        randomMarginLeft = getRandomInteger(1, 81);
        randomMarginTop = getRandomInteger(1, 45);

        marginTop = `${randomMarginTop}vh`;
        marginLeft = `${randomMarginLeft}%`;

        targetElement.style.marginTop = marginTop;
        targetElement.style.marginLeft = marginLeft;

        solve();
    }, 2000)



    function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.ceil(Math.random() * (max - min + 1)) + min; //The min and max are inclusivve
    }
}