/**
 * Created by heqiangqiang on 11/20/15.
 */

var myArray = [1,2,3,4]

for (var v of myArray){
    console.log(v);
}


var myArr = [1,2,3,4,5]

var it = myArr[Symbol.iterator]();

console.log(it.next().value);


var obj = {
    a : 2,
    b : 3
};

Object.defineProperty(obj, Symbol.iterator,{
    enumerable:false,
    writable:false,
    configurable:true,
    value:function(){
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next:function(){
                return {
                    value:o[ks[idx++]],
                    done: (idx > ks.length)
                };
            }
        }
    }
});

for (var v of obj){
    console.log(v)
}

var oit = obj[Symbol.iterator]();

console.log(oit.next());
console.log(oit.next());
console.log(oit.next());
console.log(oit.next());