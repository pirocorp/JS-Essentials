function solve() {
    const users = JSON.parse(document.getElementById('arr').value);

    const extractName = (user) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        const match = user.match(pattern);
        return match && match[0];
    };

    const extractPhoneNumber = (user) => {
        const pattern = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
        const match = user.match(pattern);
        return match && match[0];
    };

    const extractEmail = (user) => {
        const pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const match = user.match(pattern);
        return match && match[0];
    };
    
    let resultElement = document.getElementById('result');

    users.forEach(user => {
        const name = extractName(user);
        const phoneNumber = extractPhoneNumber(user);
        const email = extractEmail(user);

        if(name && phoneNumber && email) {
            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${name.trim()}`;

            const phoneElement = document.createElement('p');
            phoneElement.textContent = `Phone Number: ${phoneNumber.trim()}`;

            const emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${email.trim()}`;

            resultElement.appendChild(nameElement);
            resultElement.appendChild(phoneElement);
            resultElement.appendChild(emailElement);
        } else {
            const p = document.createElement('p');
            p.textContent = 'Invalid data';
            resultElement.appendChild(p);
        }

        const p = document.createElement('p');
        p.textContent = '- - -';
        resultElement.appendChild(p);
    });
}