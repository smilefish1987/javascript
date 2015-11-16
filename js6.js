
//模块
function CoolMode() {
	var something = 'cool'
	var another = [1,2,3,4]

	function printSomething () {
		console.log(something);
	}

	function printAnother() {
		console.log(another.join(' ! '));
	}

	return {
		printSomething:printSomething,
		printAnother:printAnother
	}
}

var foo = CoolMode()
foo.printSomething()
foo.printAnother()



//单例模块
var SingleMode = (
	function CoolMode() {
		var something = 'cool'
		var another = [1,2,3,4]

		function printSomething () {
			console.log(something);
		}

		function printAnother() {
			console.log(another.join(' ! '));
		}

		return {
			printSomething:printSomething,
			printAnother:printAnother
		}
	}
)()

SingleMode.printSomething()
SingleMode.printAnother()


var Api = (
	function api(id){
		function getData() {
			console.log(id);
		}

		function upper() {
			console.log(id.toUpperCase());
		}

		function toUpper(){
			publicApi.getData = upper;
		}

		var publicApi = {
			getData:getData,
			toUpper:toUpper
		}
		return publicApi;
	}
)('api module')

Api.getData();
Api.toUpper();
Api.getData();