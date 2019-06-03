function solve(minAge, ...params) {
    let persons = [];

    for (let i = 0; i < params.length; i += 2) {
        let name = params[i];
        let age = params[i + 1];
        let person = {};
        person.name = name;
        person.age = age;
        persons.push(person);
    }

    persons = persons
        .filter(p => p.age >= minAge)
        /* .sort() */;

    persons.forEach(e => console.log(e));
}

solve(19, 'Hristofor', 119, 'Asen', 20);