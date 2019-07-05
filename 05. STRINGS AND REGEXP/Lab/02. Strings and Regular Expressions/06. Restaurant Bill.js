function solve(inputArr) {
    let purchases = [];
    let sum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];
        
        if(Number(element)) {
            sum += Number(element);
        } else {
            purchases.push(element)
        }
    }

    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sum}`);
}
solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);