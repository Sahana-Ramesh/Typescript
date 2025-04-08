class school{
    rollno:number;
    name:string;
    std:number;

    setData(x:number,y:string,z:number){
        this.rollno= x;
        this.name=y;
        this.std=z;
    }

    details(){
        console.log(this.rollno+ " "+ this.name+" "+this.std);
    }
}

//Initialize variables using object variables 
var student = new school();
student.rollno=1;
student.name="sahana";
student.std=10;
student.details();

//Initialize variables using method setData 
student.setData(2,"gana",10);
student.details();

//Initialize variables using constructor

class office{
    id:number;
    name:string;
    dept:number;

    constructor(a:number,b:string,c:number){
        this.id= a;
        this.name=b;
        this.dept=c;
    }

    details(){
        console.log(this.id+ " "+ this.name+" "+this.dept);
    }
}

var emp1=new office(1,"padma",9);
emp1.details()
