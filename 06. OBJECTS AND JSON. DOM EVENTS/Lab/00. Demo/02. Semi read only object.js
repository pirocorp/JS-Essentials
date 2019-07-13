function solve() {
    cat = {
        name: 'Tom',
        age: 5
    }

    Object.seal(cat);
    cat.age = 10;   //OK
    delete cat.age; //Error in strict mode
    
    console.log(cat);
}
solve();