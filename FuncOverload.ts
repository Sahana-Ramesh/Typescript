function addition(a:number,b:number):number;
function addition(a:string,b:string):string;

function addition(a:any, b:any):any{
    return a + b;
}

console.log(addition(100,10));
console.log(addition("Sana"," gana"));

//Rest parameters in Function
function greet(msg:string,...name:string[]){
    console.log(msg+" "+name);
}

greet("Hi")
greet("Hi","sahana")
greet("Hi","sahana","ramesh")

