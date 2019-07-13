function solve(arrStrings) {
    let heros = [];

    for (let i = 0; i < arrStrings.length; i++) {
        const currentString = arrStrings[i];
        let [heroName, heroLevel, items] = currentString
            .split('/')
            .filter(x => x !== '')
            .map(x => x.trim());

        heroLevel = Number(heroLevel);

        if(items) {
            items = items
                .split(', ')
                .filter(x => x !== '')
                .map(x => x.trim());
        } else {
            items = [];
        }  

        const currentHero = {
            name: heroName,
            level: heroLevel,
            items: items
        }

        heros.push(currentHero);
    }

    console.log(JSON.stringify(heros));
}
solve(['Isacc / 25 /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);