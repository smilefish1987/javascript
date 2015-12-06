
var obj = {
    a:2
};

var myObj = Object.create(obj);

console.log(obj.a); //2
console.log(myObj.a);  //2

console.log(obj.hasOwnProperty('a'));  //true
console.log(myObj.hasOwnProperty('a'));  //false

myObj.a++;  //隐式屏蔽

console.log(obj.a);  //2
console.log(myObj.a);  //3

console.log(myObj.hasOwnProperty('a')); //true


function Foo() {
  // body...
}

var a = new Foo()

// new Foo()生成了一个新对象a， a的内部链接[[Prototype]]关联的是Foo.prototype对象
console.log(Object.getPrototypeOf(a) == Foo.prototype); //true
