/**
 * Created by heqiangqiang on 12/4/15.
 */

//寄生继承

function Vehicle() {
    this.engines = 1;
}

Vehicle.prototype.ignition = function() {
    console.log("Turning on my engine.");
}

Vehicle.prototype.drive = function() {
    this.ignition();
    console.log("Steering and moving forward!");
}

function Car() {
    var car = new Vehicle();
    car.wheels = 4;
    var vehDrive = car.drive;
    car.drive = function(){
        vehDrive.call(this);
        console.log("Rolling on all "+this.wheels + " wheels!");
    }
    return car;
}

var myCar = new Car();
myCar.drive();