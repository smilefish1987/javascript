function identify() {
	return this.name.toUpperCase();
}


function hello(){
	var green = "hello "+ identify.call(this)
	console.log(green);
}

var me = {
	name : 'peter'
}

var you = {
	name : 'reader'
}

console.log(identify.call(me));
console.log(identify.call(you));

hello.call(me);
hello.call(you);



function foo(i) {
	console.log(i);
	this.count++;
}

foo.count = 0;

for (var i = 0; i < 10; i++) {
	if (i > 5) {
		foo(i);
	};
};

console.log(foo.count);  //0 而不是 4


function bar(i) {
	console.log(i);
	bar.count++;   //通过函数名在函数内部引用具名函数自己
}

bar.count = 0;

for (var i = 0; i < 10; i++) {
	if (i > 5) {
		bar(i);
	};
};

console.log(bar.count);  //4


function fn(i) {
	console.log(i);
	this.count++;
}

fn.count = 0;

for (var i = 0; i < 10; i++) {
	if (i > 5) {
		fn.call(fn,i);
	};
};

console.log(fn.count);  //4


