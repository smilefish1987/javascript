function foo(something) {
	this.a = something
}

var obj1 = {}

var bar = foo.bind(obj1)
bar(2)
console.log(obj1.a);  //2


var baz = new bar(3)
console.log(obj1.a);  //2
console.log(baz.a);   //3


function fn1(p1, p2) {
	this.val = p1 + p2;
}

var fn2 = fn1.bind(null, "p1")
var fn3 = new fn2("p2")
console.log(fn3.val)