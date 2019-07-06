function solve(arrayOfStrings) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentString = arrayOfStrings[i];
        currentString = censorNames(currentString);
        currentString = censorPhones(currentString);
        currentString = censorIds(currentString);
        currentString = censorBase(currentString);

        console.log(currentString);
    }

    function censorNames(input){                          
        const nameRegex = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g;
        return input.replace(nameRegex, (m) => '|'.repeat(m.length));
    }

    function censorPhones(input) {                         
        let phoneRegex = /(\+[0-9-]{10})(?= |\t|$)/g;
        return input.replace(phoneRegex, (m) => '|'.repeat(m.length));       
    }

    function censorIds(input) {
        let idRegex = /(![A-Za-z0-9]+)(?= |\t|$)/g; 
        return input.replace(idRegex, (m) => '|'.repeat(m.length));
    }

    function censorBase(input) {
        let baseRegex = /(_[A-Za-z0-9]+)(?= |\t|$)/g;
        return input.replace(baseRegex, (m) => '|'.repeat(m.length));
    }
}

solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.']
);

solve(['I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);