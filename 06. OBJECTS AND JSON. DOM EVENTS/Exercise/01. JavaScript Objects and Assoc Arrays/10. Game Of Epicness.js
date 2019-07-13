function solve(generals, battles) {
    let realm = new Map();

    //Read generals Input
    for (const currentGeneral of generals) {
        if(!realm.get(currentGeneral.kingdom)){
            realm.set(currentGeneral.kingdom, new Map());
        }

        if(!realm.get(currentGeneral.kingdom).get(currentGeneral.general)) {
            realm.get(currentGeneral.kingdom).set(currentGeneral.general, {
                army: 0,
                wins: 0,
                loses: 0
            });
        }

        realm.get(currentGeneral.kingdom).get(currentGeneral.general).army += currentGeneral.army;
    }

    //Read battles input and process them
    for (const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] of battles) {
        let attackingGeneralArmy = realm.get(attackingKingdom).get(attackingGeneral).army;
        let defendingGeneralArmy = realm.get(defendingKingdom).get(defendingGeneral).army;

        if(attackingKingdom === defendingKingdom) {
            continue;
        }
      
        if(attackingGeneralArmy > defendingGeneralArmy) {
            attackingGeneralArmy = Math.floor(attackingGeneralArmy * 1.10);
            defendingGeneralArmy = Math.floor(defendingGeneralArmy * 0.90);             

            realm.get(attackingKingdom).get(attackingGeneral).wins++;
            realm.get(defendingKingdom).get(defendingGeneral).loses++;

        } else if(defendingGeneralArmy > attackingGeneralArmy) {
            defendingGeneralArmy = Math.floor(defendingGeneralArmy * 1.10);
            attackingGeneralArmy = Math.floor(attackingGeneralArmy * 0.90); 

            realm.get(attackingKingdom).get(attackingGeneral).loses++;
            realm.get(defendingKingdom).get(defendingGeneral).wins++;
        } else {
            continue;
        }

        realm.get(attackingKingdom).get(attackingGeneral).army = attackingGeneralArmy;
        realm.get(defendingKingdom).get(defendingGeneral).army = defendingGeneralArmy;
    }

    //Finds winning kingdom
    const orderedKingdoms = Array.from(realm.keys()).sort((a, b) => sortKingdoms(a, b));
    let winningKingdom = orderedKingdoms[0];

    //Print Output
    const orderedGenerals = Array.from(realm.get(winningKingdom).keys()).sort((a, b) => sortGenerals(a, b, winningKingdom));
    console.log(`Winner: ${winningKingdom}`);

    for (const generalName of orderedGenerals) {
        const currentGeneral = realm.get(winningKingdom).get(generalName);
        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${currentGeneral.army < 0 ? 0 : currentGeneral.army}`);
        console.log(`---wins: ${currentGeneral.wins}`);
        console.log(`---losses: ${currentGeneral.loses}`);
    }

    /* console.log(realm); */

    function sortGenerals(a, b, kingdom){
        const firstGeneralArmy = realm.get(kingdom).get(a).army;
        const secondGeneralArmy = realm.get(kingdom).get(b).army;
        return secondGeneralArmy - firstGeneralArmy;
    }

    function sortKingdoms(a, b){        
        if (calcWins(a) !== calcWins(b)) {
            return calcWins(b) - calcWins(a);
        } else if (calcLoses(a) !== calcLoses(b)) {
            return calcLoses(a) - calcLoses(b);
        } else {
            return a.localeCompare(b);
        }
    }

    function calcLoses(str) {
        return Array.from(realm.get(str).values())
            .map(x => x.loses)
            .reduce((a, b) => a + b, 0);
    }

    function calcWins(str) {
        return Array.from(realm.get(str).values())
            .map(x => x.wins)
            .reduce((a, b) => a + b, 0);
    }
}
solve([
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 },
    { kingdom: "aa", general: "zzz", army: 0 },
    { kingdom: "bbb", general: "zzz", army: 0 }
],
[
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
]);