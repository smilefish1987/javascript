
function foo(a) {
	var b = 2

	function bar(argument) {
		// body...
	}

	var c = 3;
}


function fn1() {
	function bar(a) {
		var i = 3
		console.log(a+i)
	}

	for (var i = 0; i < 10 ; i++) {
		bar(i*2)
	}
}

fn1()


var a = 2;

(function IIFE(def) {
	def(exports)
})(function def(global) {
	var a = 3
	console.log(a);
	console.log(global.a);
})


for (var i = 10; i >= 0; i--){
	console.log(i);
};

console.log(i);


try{
	undefined();
} catch (err) {
	console.log(err);
}

//console.log(err);

