function addition(a, b) {
    return a + b;
}
console.log(addition(100, 10));
console.log(addition("Sana", " gana"));
//Rest parameters in Function
function greet(msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    console.log(msg + " " + name);
}
greet("Hi");
greet("Hi", "sahana");
greet("Hi", "sahana", "ramesh");
