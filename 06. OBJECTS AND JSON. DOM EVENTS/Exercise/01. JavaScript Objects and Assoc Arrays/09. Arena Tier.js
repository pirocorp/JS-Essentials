function solve(inputStrings) {
    let gladiators = new Map();

    for (const str of inputStrings) {
        if (str.includes('->')){
            let [gladiatorName, technique, skill] = str
                .split(' -> ')
                .map(x => x.trim())
                .filter(x => x != '');

            skill = Number(skill);

            if (!gladiators.get(gladiatorName)) {
                const currentGladiator = {
                    name: gladiatorName,
                    technique: new Map()
                }

                gladiators.set(gladiatorName, currentGladiator);
            }

            const currentGladiator = gladiators.get(gladiatorName);

            if (!currentGladiator.technique.get(technique) ||
                currentGladiator.technique.get(technique) < skill) {
                currentGladiator.technique.set(technique, skill);
            }
        }

        //Duel
        if (str.includes(' vs ')) {
            const [gladiatorName1, gladiatorName2] = str
                .split(' vs ')
                .map(x => x.trim())
                .filter(x => x != '');

            if (gladiators.get(gladiatorName1) && 
                gladiators.get(gladiatorName2)){
                const glad1 = gladiators.get(gladiatorName1);
                const glad2 = gladiators.get(gladiatorName2);

                let glad1Techniques = Array.from(glad1.technique.keys());
                let glad2Techniques = Array.from(glad2.technique.keys());

                if(glad1Techniques.length > glad2Techniques.length){
                    const swap = glad1Techniques;
                    glad1Techniques = glad2Techniques;
                    glad2Techniques = swap;
                }

                for (const currentTechnique of glad1Techniques) {
                    if (glad2Techniques.includes(currentTechnique)){
                        glad1TotalSkillPoints = Array.from(glad1.technique.values()).reduce((a, b) => a + b, 0);
                        glad2TotalSkillPoints = Array.from(glad2.technique.values()).reduce((a, b) => a + b, 0);
                    
                        if (glad1TotalSkillPoints < glad2TotalSkillPoints) {
                            gladiators.delete(gladiatorName1);
                        } else if (glad2TotalSkillPoints < glad1TotalSkillPoints) {
                            gladiators.delete(gladiatorName2);
                        }

                        break;
                    }
                }
            }
        }
    }

    let orderedGladiators = Array.from(gladiators.keys())
        .sort((a, b) => sortGladiators(a, b));

    for (const gladiator of orderedGladiators) {
        gladiatorTotalSkillPoints = Array.from(gladiators.get(gladiator).technique.values()).reduce((a, b) => a + b, 0);
        console.log(`${gladiator}: ${gladiatorTotalSkillPoints} skill`);

        const orderedGladiatorSkilss = Array.from(gladiators.get(gladiator).technique.keys())
            .sort((a, b) => sortGladiatorSkills(a, b, gladiator));
        
        for (const currentSkillName of orderedGladiatorSkilss) {
            const currentSkillValue = gladiators.get(gladiator).technique.get(currentSkillName);
            console.log(`- ${currentSkillName} <!> ${currentSkillValue}`);
        }
    }

    function sortGladiatorSkills(skillName1, skillName2, gladiatorName) {
        const skill1 = gladiators.get(gladiatorName).technique.get(skillName1);
        const skill2 = gladiators.get(gladiatorName).technique.get(skillName2);

        if(skill1 !== skill2){
            return skill2 - skill1;
        } else {
            skillName1.localeCompare(skillName2);
        }
    }

    function sortGladiators(gladiatorName1, gladiatorName2) {
        const glad1 = gladiators.get(gladiatorName1);
        const glad2 = gladiators.get(gladiatorName2);

        glad1TotalSkillPoints = Array.from(glad1.technique.values()).reduce((a, b) => a + b, 0);
        glad2TotalSkillPoints = Array.from(glad2.technique.values()).reduce((a, b) => a + b, 0);

        if (glad1TotalSkillPoints !== glad2TotalSkillPoints) {
            return glad2TotalSkillPoints - glad1TotalSkillPoints;
        } else {
            return gladiatorName1.localeCompare(gladiatorName2);
        }
    }
}
solve([ 'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar']
);