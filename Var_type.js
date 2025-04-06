var globalVar = 100; // can access everywhere
function test_var() {
    if (true) {
        var localVar = 10; //can access inside the function
        console.log(localVar);
        console.log(globalVar);
    }
    console.log("printing outside if" + localVar);
    console.log("printing outside if" + globalVar);
}
test_var();
console.log("printing outside func before redeclaration" + globalVar);
var globalVar = 1000; //var can be redeclared
// console.log("printing outside func"+ localVar) // error cant access here
console.log("printing outside func after redeclaration" + globalVar);
