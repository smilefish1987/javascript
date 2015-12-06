// 原型面向对象风格
function Parent(name) {
    this.name = name;
}

Parent.prototype.identify = function() {
    return "I'm " + this.name;
}

function Child(name) {
    Parent.call(this, name);
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.sayHello = function() {
    console.log("Hello "+this.identify());
}

var c1 = new Child('c1');
var c2 = new Child('c2');

c1.sayHello();
c2.sayHello();

//对象关联风格

var Foo = {
    init : function(name) {
        this.name = name;
    },
    identify: function() {
        return "I'm " + this.name;
    }
};

var Bar = Object.create(Foo);

Bar.sayHello = function() {
    console.log("hello "+ this.identify());
}

var b1 = Object.create(Bar);
b1.init('b1');
var b2 = Object.create(Bar);
b2.init('b2');

b1.sayHello();
b2.sayHello();
