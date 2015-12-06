function foo() {
	console.log(this.a);
}


var obj = {
	a : 100
}

foo.call(obj)  //100
foo.apply(obj)  //100




function fn1() {
	console.log(this.a)
}


var obj2 = {
	a : 110
}

var fun = function() {
	fn1.call(obj2)
}

fun()   //110

setTimeout(fun, 1000)  //110

fun.call(exports)   //110


