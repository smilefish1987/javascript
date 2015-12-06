/**
 * Created by heqiangqiang on 11/19/15.
 */

var obj = {
    a : 2
};

console.log(Object.getOwnPropertyDescriptor(obj, "a"));

var obj2 = {};


Object.defineProperty(obj2,"b",{
    value:2,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(obj2.b);


var obj3 = {
  a : 200
};

Object.preventExtensions(obj3);

obj3.b = 100;

console.log(obj3.b)


var obj4 = {
    get a() {
        return 199;
    }
};

console.log(obj4.a);
obj4.a = 1000;
console.log(obj4.a);


var myObj = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_= val;
    }
};

myObj.a = 4;
console.log(myObj.a);


var myObject = {
    a : 200
};

console.log("a" in myObject);   //true
console.log("b" in myObject);   //false
console.log(myObject.hasOwnProperty("a"));  //true
console.log(myObject.hasOwnProperty("b"));  //false


console.log(Object.prototype.hasOwnProperty.call(myObject, "a"));  //true

console.log(4 in [1,2,4]);   //false

