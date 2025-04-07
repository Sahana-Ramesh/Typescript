//one way
var arr1:number[][]= [[1,0],[9,2],[3,8]];
console.log(arr1);

//second
var arr2:(string|number)[][]= [["Sahana", 2001], ["Ganav", 2006]];
console.log(arr2);

//Access
console.log(arr1[0][1]);

//Or
for(var i=0; i<arr1.length;i++){
    for(var x = 0; x<arr1[i].length;x++){
        console.log(arr1[i][x])
    }
}

