//Expression is any valid unit of code that resolves to a value:

//with side effects
let assignedVariable = 2;       //This is a statement
assignedVariable = 5;           //Expression
console.log(assignedVariable);  //5

//with resolve effects
let assignedVariable = 2;       //This is a statement
assignedVariable + 4;           //Expression
assignedVariable * 10;          //Expression
assignedVariable - 10;          //Expression
console.log(assignedVariable);  //2