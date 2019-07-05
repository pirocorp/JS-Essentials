function solve(arrOfStrings) {
    const regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/;

    for (const element of arrOfStrings) {
        //Dont use regex.test with g flag
        let match = regex.exec(element);
        if(match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

solve(['Isacc - 1000 - CEO', 'Peter - 500 - Employee', 'Ivan - 500 - Employee']);