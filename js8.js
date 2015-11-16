var obj = {
	id : 'obj id',
	cool: function cooFun(){
		console.log(this.id);
	}
};

var id = 'global id';

obj.cool()

setTimeout(obj.cool, 1000);


var oj = {
	count: 0,
	cool: function coolFun() {
		var self = this;

		if(self.count < 1){
			setTimeout(function timer(){
				self.count++;
				console.log(self.count);
			}, 100);
		}
	}
}

oj.cool()


var o = {
	count: 0,
	cool: function coolFun() {

		if(this.count < 1){
			setTimeout(() => {
				this.count++;
				console.log(this.count);
			}, 100);
		}
	}
}


o.cool()


var ob = {
	count: 0,
	cool: function coolFun() {

		if(this.count < 1){
			setTimeout(function timer(){
				this.count++;
				console.log(this.count);
			}.bind(this), 100);
		}
	}
}

ob.cool()