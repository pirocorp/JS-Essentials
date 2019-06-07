function solve() {
    let elements = document.getElementsByClassName('link-1');
    
    for (let i = 0; i < elements.length; i++) {
        let currentElement = elements[i];
        currentElement.addEventListener('click', (e) => {
            //currentTarget is currentElement in context of eventHandler
            let currentTarget = e.currentTarget; // It always refers to the element to which the event handler has been attached
            let pElement = currentTarget.getElementsByTagName('p')[0];

            //text proccessing
            let text = pElement.textContent;
            let textParts = text.split(' ');
            let clicks = Number(textParts[1]);
            clicks++;
            textParts[1] = clicks;

            //saving new text in the pElement
            pElement.textContent = textParts.join(' ');
        });  
    }
}