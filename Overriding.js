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
var RBI = /** @class */ (function () {
    function RBI(p, t) {
        this.principle = p;
        this.time = t;
    }
    RBI.prototype.roi = function () {
        var rate = 6;
        return (this.principle * this.time * rate) / 100;
    };
    return RBI;
}());
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBI.prototype.roi = function () {
        var rate = 10;
        return (this.principle * this.time * rate) / 100;
    };
    return SBI;
}(RBI));
var HDFC = /** @class */ (function (_super) {
    __extends(HDFC, _super);
    function HDFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HDFC.prototype.roi = function () {
        var rate = 12;
        return (this.principle * this.time * rate) / 100;
    };
    return HDFC;
}(RBI));
var amt = 10000;
var duration = 2;
var bank1 = new RBI(amt, duration);
console.log("RBI: " + bank1.roi());
var bank2 = new SBI(amt, duration);
console.log("SBI: " + bank2.roi());
var bank3 = new HDFC(amt, duration);
console.log("HDFC: " + bank3.roi());
