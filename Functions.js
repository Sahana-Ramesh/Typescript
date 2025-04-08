//named functions
function test_fuc() {
    console.log("employee");
}
test_fuc();
//Function with parameters and return type
function sum(x, y) {
    return x + y;
}
var res = sum(1, 9);
console.log(res);
console.log(sum(10, 29));
//Anonymous function
var some_func = function () {
    console.log("Hey");
};
some_func();
//-----OR-----
var func = function (x, y) {
    var h = "Hello ";
    return h.concat(x) + " " + y;
};
console.log(func("sahana", "ramesh"));
//console.log(func("sahana")); errors
//console.log(func("sahana", "ramesh", "gowda")); shld give the exact number of params
//Default function parameters which has to be given.
function blah(y, x) {
    if (x === void 0) { x = "Hi"; }
    return x + " " + y;
}
console.log(blah("sahana", "ramesh"));
console.log(blah("sahana"));
//Optional function parameter
function duhh(x, y) {
    var h = "Hello";
    return h + " " + x + " " + y;
}
console.log(duhh("sahana"));
console.log(duhh("sahana", "ramesh"));
//console.log(duhh("sahana", "ramesh", "gowda"));// compilation error
//----------------------Fat arrow function-----------------------------------------------
//Arrow or Lamda functions
var calci = function (a, b) {
    return a + b;
};
console.log(calci(2, 8));
//--OR--
var lol = function () {
    console.log("print it");
};
var lala = function () { return console.log("hello world"); };
lala();
lol();
var sub = function (x, y) { return console.log(x - y); };
sub(100, 10);
var mul = function (x, y) {
    return x * y;
};
console.log(mul(2, 8));
