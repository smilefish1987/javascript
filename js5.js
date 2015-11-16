"use strict";


function foo() {
	var a = 2
	function bar() {
		console.log(a)
	}

	return bar
}

var baz = foo()

baz()  //闭包


function fun1() {
	var a = 100
	function bar() {
		console.log(a);
	}
	fn(bar)
}

function fn(argument) {
	argument()  //闭包
}

fun1()




var gFun

function fun2() {
	var a = 1000
	function bar() {
		console.log(a);
	}
	gFun = bar
}

function fun3(inFun) {
	inFun()  //闭包 closure
}

fun2()
fun3(gFun)


// for (var i = 1; i <=5; i++) {
// 	setTimeout(function timer(){
// 		console.log(i);
// 	}, i*1000);  //每秒钟输出一个6，输出5个
// };


// for (var i=1; i<=5; i++) { 
// 	(function() {
// 		setTimeout( function timer() { console.log( i );
//              }, i*1000 );
//          })();
// }


// for (var i=1; i<=5; i++) { 
// 	(function() {
// 		var j = i;
// 		setTimeout( function timer() {
//                  console.log( j );
//              }, j*1000 );
// 	})(); 
// }


// for (var i = 1; i <=5; i++) {
// 	(function tt(val){ 
// 		setTimeout(function timer(){
// 			console.log(val);}, i*1000)
// 	  })(i);  //每秒钟输出一个数，从1到5
// };


// for (var i=1; i<=5; i++) {
// 	let j = i; // 是的,闭包的块作用域! 
// 	setTimeout( function timer() {
//              console.log( j );
//          }, j*1000 );
// }


for (let i=1; i<=5; i++) { setTimeout( function timer() {
             console.log( i );
         }, i*1000 );
}