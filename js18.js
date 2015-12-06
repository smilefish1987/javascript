/**
 * Created by heqiangqiang on 11/19/15.
 */

function foo(a, b) {
    console.log("a:"+ a + "b:"+b);
}

var ø = Object.create(null);

foo.apply(ø, [2,3]);    // a:3, b:3

var bar = foo.bind(ø, 2);
bar(3);  // a:2, b:3


function fn() {
    console.log(this.a);
}

var a = 2;
var o = {a:3, fn:fn};
var p = {a: 4};

o.fn() //3
(p.fn = o.fn)(); //2