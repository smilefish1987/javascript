function foo() {
	console.log(this.a);
}

var obj1 = {
	a : 2,
	foo : foo
}

var obj2 = {
	a : 3,
	foo : foo
}


obj1.foo()   //2

obj2.foo()   //3

//显示绑定优先级高于隐式绑定

obj1.foo.call(obj2)  //3

obj2.foo.call(obj1)  //2