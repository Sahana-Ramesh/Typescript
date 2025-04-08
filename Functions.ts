//named functions

function test_fuc(){
    console.log("employee");
}

test_fuc()
//Function with parameters and return type

function sum(x:number, y:number):number //last number is the return type
{
    return x + y;
}

let res = sum(1,9);
console.log(res);
console.log(sum(10,29));

//Anonymous function
let some_func = function(){
    console.log("Hey");
} 

some_func();
//-----OR-----
let func= function(x:string, y:string):string{
    let h = "Hello ";
    return h.concat(x)+" "+ y;
}

console.log(func("sahana", "ramesh"));
//console.log(func("sahana")); errors
//console.log(func("sahana", "ramesh", "gowda")); shld give the exact number of params

//Default function parameters which has to be given.
function blah(y:string, x:string="Hi"):string
{
    return x + " " + y;
}

console.log(blah("sahana", "ramesh"));
console.log(blah("sahana"));


//Optional function parameter

function duhh(x:string,y?:string):string
{
    let h = "Hello";
    return h + " " + x + " " + y;
}

console.log(duhh("sahana"));
console.log(duhh("sahana", "ramesh"));
//console.log(duhh("sahana", "ramesh", "gowda"));// compilation error

//----------------------Fat arrow function-----------------------------------------------
//Arrow or Lamda functions
var calci= (a:number,b:number)=>{
    return a+b;
}

console.log(calci(2,8));

//--OR--

var lol=()=>{
    console.log("print it");
}

var lala = () => console.log("hello world");
lala();
lol();

var sub = (x:number,y:number) => console.log(x-y);
sub(100,10);

var mul = (x:number,y:number):number =>{
    return x*y;
}

console.log(mul(2,8));