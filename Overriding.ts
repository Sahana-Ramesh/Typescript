class RBI{
    principle:number;
    time:number;
    constructor(p:number,t:number){
        this.principle=p;
        this.time=t;
    }
    roi():number{
        let rate = 6;
        return (this.principle*this.time*rate)/100;
    }
}

class SBI extends RBI{
    roi(): number {
        let rate= 10;
        return(this.principle*this.time*rate)/100;
    }
}

class HDFC extends RBI{
    roi(): number {
        let rate = 12;
        return(this.principle*this.time*rate)/100;
    }
}

let amt = 10000
let duration = 2

const bank1 = new RBI(amt,duration)
console.log("RBI: " + bank1.roi());

const bank2 = new SBI(amt,duration)
console.log("SBI: " + bank2.roi());

const bank3 = new HDFC(amt,duration)
console.log("HDFC: " + bank3.roi());


