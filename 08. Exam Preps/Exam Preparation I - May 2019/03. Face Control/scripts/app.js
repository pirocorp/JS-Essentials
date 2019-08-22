function getData () {
    const peopleInElement = document.querySelector('#peopleIn p');
    const peopleOutElement = document.querySelector('#peopleOut p');
    const blacklistElement = document.querySelector('#blacklist p');

    const arr = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        
        switch(element.action) {
            case 'peopleIn':
                peopleIn(element);
                break; 
            case 'peopleOut':
                peopleOut(element);
                break;
            case 'blacklist':
                blacklist(element);
                break;
        }
    }

    criteria(arr[arr.length -1]);

    function peopleIn(person) {
        if (checkPersonInList(person, 'peopleIn')) {
            return;
        }
        
        if (checkPersonInList(person, 'blacklist')) {
            return;
        }

        addPerson(person);
    }

    function addPerson(person) {
        peopleInElement.textContent += personToString(person);
    }

    function peopleOut(person) {
        let personsInClub = getPersonsFrom('peopleIn');  
        
        if (checkPersonInList(person, 'peopleIn')) {
            personsInClub = personsInClub.filter(x => x.firstName !== person.firstName || x.lastName !== person.lastName);

            peopleInElement.textContent = '';
            personsInClub.forEach(x => addPerson(x));
            peopleOutElement.textContent += personToString(person);
        }
    }

    function blacklist(person) {
        blacklistElement.textContent += personToString(person);
        
        if (checkPersonInList(person, 'peopleIn')) {
            peopleOut(person);
        }
    }

    function getPersonsFrom(list) {
        const inputStrings = document.querySelector(`#${list} p`).textContent
            .split(' ')
            .filter(x => x != '');

        let persons = [];

        for (let i = 0; i < inputStrings.length; i++) {
            const person = JSON.parse(inputStrings[i]);
            persons.push(person);
        }

        return persons;
    }

    function checkPersonInList(person, listName) {
        const list = getPersonsFrom(listName);

        if (list.some(x => x.firstName === person.firstName && x.lastName === person.lastName)) {
            return true;
        }

        return false;
    }

    function personToString(person) {
        return `{"firstName":"${person.firstName}","lastName":"${person.lastName}"} `;
    }

    function criteria(criteria) {
        if (criteria.criteria !== '' && criteria.action !== '') {
            let peoplesInAction = getPersonsFrom(criteria.action);
            peoplesInAction.sort((a, b) => a[criteria.criteria].localeCompare(b[criteria.criteria]));

            const element = document.querySelector(`#${criteria.action} p`);
            element.textContent = '';

            for (let i = 0; i < peoplesInAction.length; i++) {
                const currentPerson = peoplesInAction[i];
                element.textContent += personToString(currentPerson);
            }
        }
    }
}