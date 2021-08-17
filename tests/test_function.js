is_even = require("../index.js")

class Test{
	constructor(description,func,input, expected){
		this.description = description
		this.func = func
		this.input = input
		this.expected = expected
	}
	static test = function(){
		results = this.func(this.input)

		if (results !== this.expected){
			return {status:false, message:this.description + " failing. Results: " + results + " Expected: " + this.expected}
		}

		return {status:true, message: this.description + " Passing"}
	}
}

exports.make_test_is_even = function(value, expected){
	descr = "Test for "+value
	input = value
	func = function(input){
		return is_even(input)
	}

	let newTest = new Test(descr, func, input, expected)

	return newTest
}