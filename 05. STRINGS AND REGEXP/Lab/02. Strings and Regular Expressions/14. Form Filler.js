function solve(username, email, phone, text) {
    const usernameRegex = /<![A-Za-z]+!>/g;
    const emailRegex = /<@[A-Za-z]+@>/g;
    const phoneRegex = /<\+[A-Za-z]+\+>/g;

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        const result = element
            .replace(usernameRegex, username)
            .replace(emailRegex, email)
            .replace(phoneRegex, phone);

        console.log(result);
    }
}

solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);