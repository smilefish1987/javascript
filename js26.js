
function Foo(name) {
    this.name = name;
}

Foo.prototype.getName = function() {
    return this.name;
  // body...
}

function Bar(name, lable) {
  // body...
    Foo.call(this, name);
    this.lable = lable;
}

Bar.prototype = Object.create(Foo.prototype);

// 1. Bar.prototype = Foo.prototype; 并没有创建一个新建对象，只是将让Bar.prototype 引用原来 Foo.prototype
// 当你对Bar.prototype.getX时，Foo.prototype也会受到影响，明显不是你的本意，否则就可以直接使用Foo.prototype,
// 并不需Bar.prototype

// 2. Bar.prototype = new Foo();  确实新建了一个对象，但是当Foo()函数有写日志，修改状态，添加属性到this时，这些
// 都会影响Bar的后代，后果不堪设想

Bar.prototype.getLable = function(){
    return this.lable;
}

var a = new  Bar('bar', 'test');

console.log(a.getName());
console.log(a.getLable());
