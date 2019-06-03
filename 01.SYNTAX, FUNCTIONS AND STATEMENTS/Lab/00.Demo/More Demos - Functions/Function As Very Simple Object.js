function createCounter() {
    
    let x = 0;

    return function () {
        console.log(x++);
    }
}

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

const anotherCounter = createCounter();

anotherCounter();