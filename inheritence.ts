class person{
    name:string;
    constructor(x:string){
        this.name=x;
    }

    displayName(){
        console.log("Emploee name is "+this.name)
    }
}

class employee extends person{
    empId: number;
    constructor(x:string,y:number){
        super(x);
        this.empId=y
    }

    displayId(){
        console.log("Emploee name is "+this.name+ " with ID "+this.empId)
    }

}

var emp2= new person("sahana");
emp2.displayName();
//emp2.sisplayID() //cant access

var emp3 = new employee("ganav",102);
emp3.displayName();
emp3.displayId();