//number
var dec_type:number=17.39; //integer or decimal
var hex_no: number= 0x1A; //hexaDecimal numbers
var octal_no: number= 0o77; //Octal numbers
var bin_no: number = 0b1010; //Binary Numbers 

console.log(dec_type + '\n'+ hex_no + '\n'+ octal_no + '\n'+bin_no)

//Strings
var muName:string= "sahana"
var dept:string= "QA"

console.log(muName + '\n'+ dept)

var stmt:string= muName + " is a " + dept
console.log(stmt)

//Boolean
var boolT:boolean=true
console.log(boolT)

//Void is a return type where we are nt expecting anything to return
function test_V():void
{
    console.log("Hello")
}
test_V()

// Null represents a var whose value is undefined
// let c:string= null;  //error
// var a = 10;
// var b = 10;
// c = 100;
//Null cant be used in now
//TypeScript is running with strictNullChecks: true, which is actually the default in recent versions.

//undefined: primitive  type tat denoted all the uninitialized var's
// var unDef: number = undefined //error same reason as above
// unDef = 100;

//Any type

var A:any = 'Hi';
console.log(A)
var B:any;
console.log(B)
A = 100;
console.log(A)
B = false
console.log(B)

function test_any(z:any, y:any){
    console.log(z + y)
}

test_any(10,29)
test_any("Sahana", "Ramesh")
