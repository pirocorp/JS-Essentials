function growingWord() {
    let growingWord = document.querySelector('#exercise p');

    if (!growingWord.style.fontSize) {
        growingWord.style.fontSize = '2px';
        growingWord.style.color = 'blue';
        return
    }

    let currentColor = growingWord.style.color;
    let currentFontSize = growingWord.style.fontSize.slice(0, -2);
    
    let newColor = colorGenerator(currentColor);
    let newFontSize = currentFontSize * 2 + 'px';

    growingWord.style.color = newColor;
    growingWord.style.fontSize = newFontSize;

    function colorGenerator(currentColor) {
        let colors = ['blue', 'green', 'red'];
        let currentColorIndex = colors.indexOf(currentColor);
        let newColorIndex = (currentColorIndex + 1) % 3;
        let newColor = colors[newColorIndex];
        
        return newColor;
    }
}