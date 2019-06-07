function register() {
    let usernameElement = document.getElementById('username');
    let usernameValue = usernameElement.value;

    if(!usernameValue) {
        return;
    }

    let regex = /(.+)@(.+).(com|bg)/gm;
    let emailElement = document.getElementById('email');
    let emailValue = emailElement.value;

    if (!regex.test(emailValue)) {
        console.log(regex.test(emailValue));
        return;
    }

    let passwordElement = document.getElementById('password');
    let passwordValue = passwordElement.value;

    if(!passwordValue) {
        return;
    }

    usernameElement.value = '';
    emailElement.value = '';
    passwordElement.value = '';

    let resultElement = document.getElementById('result');
    
    let h1ResultElement = document.createElement('h1');
    h1ResultElement.innerHTML = 'Successful Registration!';

    let usernamePElement = document.createElement('p');
    usernamePElement.innerHTML = `Username: ${usernameValue}`;

    let emailPElement = document.createElement('p');
    emailPElement.innerHTML = `Email: ${emailValue}`;

    let passwordPElement = document.createElement('p');
    passwordPElement.innerHTML = `Password: ${'*'.repeat(passwordValue.length)}`;

    resultElement.appendChild(h1ResultElement);
    resultElement.appendChild(usernamePElement);
    resultElement.appendChild(emailPElement);
    resultElement.appendChild(passwordPElement);

    setTimeout(x => document.getElementById('result').innerHTML = '', 5000);
}