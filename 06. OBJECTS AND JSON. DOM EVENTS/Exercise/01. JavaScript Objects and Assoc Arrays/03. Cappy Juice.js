function solve(inputStrings) {
    let juces = [];
    let bottles = [];

    for (let i = 0; i < inputStrings.length; i++) {
        let [juce, quantaty] = inputStrings[i].split(' => ');
        quantaty = Number(quantaty);

        if(!juces[juce]) {
            juces[juce] = 0;
        }

        juces[juce] += quantaty;
        const juceBottles = Math.floor(juces[juce] / 1000);
        juces[juce] = juces[juce] % 1000;

        if(juceBottles > 0){
            if (!bottles[juce]) {
                bottles[juce] = 0;
            }

            bottles[juce] += juceBottles;
        }
    }

    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);