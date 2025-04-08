var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(x) {
        this.name = x;
    }
    person.prototype.displayName = function () {
        console.log("Emploee name is " + this.name);
    };
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(x, y) {
        var _this = _super.call(this, x) || this;
        _this.empId = y;
        return _this;
    }
    employee.prototype.displayId = function () {
        console.log("Emploee name is " + this.name + " with ID " + this.empId);
    };
    return employee;
}(person));
var emp2 = new person("sahana");
emp2.displayName();
//emp2.sisplayID() //cant access
var emp3 = new employee("ganav", 102);
emp3.displayName();
emp3.displayId();
