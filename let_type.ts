let global = 100 // can access everywhere
function test_let()
{
    if(true)
    {
        let local=10 //can access inside the block only
        console.log(local)
        console.log(global)
    }
    // console.log("printing outside if" + local) //error cant access here
    console.log("printing outside if" + global)

}

test_let();
// console.log("printing outside func"+ localVar) // error cant access here
console.log("printing outside func "+ global)
//  let global = 1000; // cannot redeclare

