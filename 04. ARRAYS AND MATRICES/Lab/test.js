function test() {
    function foo1() {
        return {
            bar: "hello"
        };
    }

    function foo2() {
        return 
        {
            bar: "hello"
        };
    }

    let result1 = foo1();
    let result2 = foo2();

    console.log(result1);
    console.log(result2);
}
test();