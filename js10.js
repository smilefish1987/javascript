function foo() {
  console.log(this.a);
}

var obj2 = {
   a : 42,
   foo: foo
}

var obj1 = {
  a : 100,
  obj2 : obj2
}

obj1.obj2.foo();  //42

function fn1() {
	console.log(this.b);
}

var obj3 = {
	b : 36,
	fn1: fn1
}

var b = 'global ops';
var fn2 = obj3.fn1;

fn2();   //undefine


function bar() {
	console.log(this.c);
}

function doFun(fn) {
	fn();
}

var c = 23333
var obj4 = {
	c: 234,
	bar: bar
}

doFun(obj4.bar)
