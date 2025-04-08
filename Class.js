var school = /** @class */ (function () {
    function school() {
    }
    school.prototype.setData = function (x, y, z) {
        this.rollno = x;
        this.name = y;
        this.std = z;
    };
    school.prototype.details = function () {
        console.log(this.rollno + " " + this.name + " " + this.std);
    };
    return school;
}());
//Initialize variables using object variables 
var student = new school();
student.rollno = 1;
student.name = "sahana";
student.std = 10;
student.details();
//Initialize variables using method setData 
student.setData(2, "gana", 10);
student.details();
//Initialize variables using constructor
var office = /** @class */ (function () {
    function office(a, b, c) {
        this.id = a;
        this.name = b;
        this.dept = c;
    }
    office.prototype.details = function () {
        console.log(this.id + " " + this.name + " " + this.dept);
    };
    return office;
}());
var emp1 = new office(1, "padma", 9);
emp1.details();
