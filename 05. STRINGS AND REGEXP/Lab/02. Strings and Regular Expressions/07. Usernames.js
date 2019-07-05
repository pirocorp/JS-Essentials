function solve(inputArr) {
    let users = [];

    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];
        let username = '';

        const indexOfAt = element.indexOf('@');
        username += element.substring(0, indexOfAt)

        username += '.';
        let currentIndex = indexOfAt;
        currentIndex++;
        username += element.substr(currentIndex, 1);

        while (element.indexOf('.', currentIndex) > 0) {
            currentIndex = element.indexOf('.', currentIndex);
            currentIndex++;
            username += element.substr(currentIndex, 1);
        }
        
        users.push(username);
    }

    console.log(users.join(', '));
}
solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);