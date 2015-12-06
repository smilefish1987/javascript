function foo(something) {
	console.log(this.a,something)
	return this.a + something
}

var obj = {
	a : 120
}

var bar = function () {
	return foo.apply(obj, arguments)
}

var b =  bar(3)
console.log(b)   //123





function fn1(argument) {
	console.log(this.a, argument)
	return this.a + argument
}


function bind(fn, obj) {
	return function(){
		return fn.apply(obj,arguments)
	}
}

var obj2 = {
	a : 100
}

var fn2 = bind(fn1, obj2)
var bb = fn2(3)
console.log(bb);  //103