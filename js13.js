function foo(argument) {
	console.log(this.a, argument)
	return this.a + argument
}

var obj = {
	a : 123
}

var bar = foo.bind(obj)

var b = bar(4)

console.log(b)  //127




function fn1(el) {
	console.log(el, this.id);
}

var ob2 = {
	id: "fish"
}

//[1,2,3].forEach(fn1, obj2)