//array declare & initialize at a time
var stds:string[]=["Sahana", "Ganav", "Padma", "Ramesh" ];

//Or
var fruits:Array<number>; //Declaration
fruits= [1,93,783,300]; //initialization

console.log(stds)
console.log(fruits)

//Multi-type array
var vals:(string|number)[]=["Sahana", "Ganav", 100, 2001 ];
//OR
var Values:Array<number|string>=["Preeta",25,"Saanu",10];


console.log(vals);
console.log(Values);

//accessing them

console.log(stds[3]);

//using for loop

for(var x=0; x<fruits.length; x++){
    console.log(fruits[x]);
}

//OR
for(var j in Values){
    console.log(Values[j]);
}

