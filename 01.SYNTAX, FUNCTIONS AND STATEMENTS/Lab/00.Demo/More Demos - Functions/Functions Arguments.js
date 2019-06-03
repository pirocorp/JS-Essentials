//Functions have one magic parameter called arguments which 
//is present in every function and have access to all parameters
//passed to a function in form of array like structure
function myFunc(a, b, ...params) {
    console.log(arguments.length);
    //In this case in params are only "optional parameters"
    //And we can't have any parameters after ...params
    console.log(params.length); //... It's some what like params in C#...
}

myFunc(1, "Pesho", {}, [2,3,4,5], 6);