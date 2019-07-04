function solve() {
    let inputText = document.getElementById('text').value;
    const groupSize = Number(document.getElementById('number').value);

    if(inputText.length % groupSize !== 0) {
        const reminder = inputText.length % groupSize;
        console.log(reminder);
        const str = inputText.substr(0, groupSize - reminder);
        inputText = inputText + str;
    }
    
    console.log(inputText);

    let resultArr = [];

    for (let i = 0; i < inputText.length; i += groupSize) {
        let currentGroup = inputText.substr(i, groupSize);
        resultArr.push(currentGroup);     
    }

    document.getElementById('result').textContent = resultArr.join(' ');
}