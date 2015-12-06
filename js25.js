
function Foo(name) {
    this.name = name;
}

Foo.prototype.getName = function() {
    return this.name
}

var a = new Foo('a');
var b = new Foo('b');

console.log(a.getName());
console.log(b.getName());
