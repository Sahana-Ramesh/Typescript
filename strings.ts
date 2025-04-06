let mystring1="welcome" ;

var mystring: string="Welcome to typescript";


//charAt ()
console. log(mystring. charAt (0)); //W 
console. log(mystring.charAt (10)); //l

//concat ()
var str1:string="welcome" ;
var str2:string=" To "; 
var str3:string=" VS code"
console. log (str1. concat (str2)); // returns 'Welcome To TypeScript'
console. log(str1. concat (str2). concat(str3)); // returns 'Welcome To TypeScript and Protractor'

//Replace
var str= "Typescript programming";

console.log(str.replace('i', 'x'));
console.log(str.replace('type', 'java'));

//split
var abc= "Sahana,Is,horrible";
console.log(abc.split(','));
console.log(abc.split(',', 2));

//Substring
let blah = "Congratulations";
console.log(blah.substring(0,7));
