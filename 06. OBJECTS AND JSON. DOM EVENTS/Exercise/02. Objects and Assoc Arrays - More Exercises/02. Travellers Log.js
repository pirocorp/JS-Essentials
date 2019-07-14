function solve(inputStrings) {
    let travellers = new Map();

    for (let inputLine of inputStrings) {
        inputLine = inputLine.trim();
        exec1 = /([A-Za-z]+)\s+gets\s+(\d+)/g.exec(inputLine);
        exec2 = /([A-Za-z]+)\s+visited\s+the\s+([A-Za-z]+)\s+in\s+([A-Za-z]+)\s+-\s+(\d+)/g.exec(inputLine);

        if (exec1) {
            let name = exec1[1];
            let money = Number(exec1[2]);

            initializeTravalerIfNotExists(name);

            money = Number(money);
            travellers.get(name).money += money;
        }
        if (exec2) {
            const name = exec2[1];
            const landmark = exec2[2];
            const country = exec2[3];
            const cost = Number(exec2[4]);

            initializeTravalerIfNotExists(name);

            const currentTravaller = travellers.get(name);
            const travallerMoney = currentTravaller.money;

            let travallerCountries = currentTravaller.countries;

            if (travallerCountries.get(country) && 
                travallerCountries.get(country).has(landmark)) {
                continue;
            }

            if (travallerMoney < cost) {
                console.log(`Not enough money to visit ${landmark}`);
                continue;
            }

            if (!travallerCountries.get(country)) {
                travallerCountries.set(country, new Set());
            }

            travallerCountries.get(country).add(landmark);
            currentTravaller.money -= cost;
        }
    }

    let sortedTravallers = Array.from(travellers.keys())
        .sort((a, b) => sortTravallers(a, b));

    for (const currentTravallerName of sortedTravallers) {
        const currentTravaller = travellers.get(currentTravallerName);
        console.log(`${currentTravallerName} visited ${currentTravaller.countries.size} countries and has ${currentTravaller.money} money left`);

        const currentTravallerCountries = currentTravaller.countries;
        const sortedCountries = Array.from(currentTravallerCountries.keys())
            .sort((a, b) => sortCountries(a, b, currentTravallerCountries));

        for (const currentCountryName of sortedCountries) {
            const currentCountryLandmarks = currentTravallerCountries.get(currentCountryName);
            console.log(`- ${currentCountryName} -> ${currentCountryLandmarks.size} landmarks`);

            const sortedLandmarks = Array.from(currentCountryLandmarks)
                .sort((a, b) => a.localeCompare(b));

            sortedLandmarks.forEach(x => console.log(`-- ${x}`));
        }
    }

    function sortCountries(a, b, currentTravallerCountries) {
        const firstCountry = currentTravallerCountries.get(a);
        const secondCountry = currentTravallerCountries.get(b);

        return secondCountry.size - firstCountry.size;
    }

    function sortTravallers(a, b) {
        const firstTravaler = travellers.get(a);
        const secondTravaler = travellers.get(b);

        return secondTravaler.countries.size - firstTravaler.countries.size;
    }

    function initializeTravalerIfNotExists(name) {
        if (!travellers.get(name)) {
            let newTravaler = {
                name: name,
                money: 0,
                countries: new Map()
            }

            travellers.set(name, newTravaler);
        }
    }
}
solve(['Peter gets 100',
    'Peter visited the StatueOfLiberty in USA - 50',
    'Bill gets 250',
    'Tim visited the ChristTheRedeemer in Brazil - 150',
    'Bill gets 400',
    'Bill visited the MountFuji in Japan - 60',
    'Bill visited the TeatroAmazonas in Japan - 50',
    'Bill gets 150',
    'Bill visited the ChristTheRedeemer in Brazil - 150',
    'Tim gets 500',
    'Bill visited the StatueOfLiberty in USA - 440',
    'Tim visited the StatueOfLiberty in USA - 440',
    'Maria gets 650',
    'Maria visited the StatueOfLiberty in USA - 440',
    'Maria visited the CapeCod in USA - 100',
    'Asen visited the MonumentOfBg in Bulgaria - 50']
);