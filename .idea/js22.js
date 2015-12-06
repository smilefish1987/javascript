/**
 * Created by heqiangqiang on 12/4/15.
 */

//混入继承（显示继承）

function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}

var Vehicle = {
    engines : 1,
    ignition : function(){
        console.log("turing on my engine.");
    },
    drive: function(){
        this.ignition();
        console.log("steering and moving forward!");
    }
};

var Car = mixin(Vehicle, {
    wheels: 4,
    drive:function(){
        Vehicle.drive().call(this);
        console.log("Rolling on all "+ this.wheels + "wheels!");
    }
});
