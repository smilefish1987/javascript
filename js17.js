function foo() {
	console.log(this.a);
}

var a = 2;

foo.call(null);




function fn1(a, b) {
    console.log("a:"+ a + ", b:"+b);
}

fn1.apply(null, [2,3]);  // a:2, b:3

var bar = fn1.bind(null, 2);
bar(3);  // a:2, b:3
