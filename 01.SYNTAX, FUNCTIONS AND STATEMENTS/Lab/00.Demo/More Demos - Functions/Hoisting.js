//Functions can be used before they are declared
const person = createPerson("Pesho", 25);

console.log(person.getName());
person.setName("Asen");
console.log(person.getName());


//if function is assigned to variable hoisting wont work
function createPerson(name, age) {
    //instance is this 

    const instance = {};
    instance.name = name;
    instance.age = age;

    return {
        getName: () => instance.name,
        getAge: () => instance.age,
        setName: (value) => instance.name = value,
        setAge: (value) => instance.age = value
    };
}