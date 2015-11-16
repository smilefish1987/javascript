
function foo (str, a) {
	eval(str)
	console.log(a, b)	
}

var b = 2
foo("var b = 3;",1)


function bar (str) {
	"use strict"
	eval(str)
	//console.log(a)  //ReferenceError
}

bar("var a = 3;")


var obj = {
	a: 1,
	b: 2,
	c: 3
}

console.log(obj);

with (obj) {
	a = 3,
	b = 4,
	c = 5
}

console.log(obj);


function fn1(obj) {
	with (obj) {
		a = 2
	}
}

var o1 = {
	a: 3
}

var o2 = {
	b : 3
}

fn1(o1)
console.log(o1.a);

fn1(o2)
console.log(o2.a);
console.log(a);