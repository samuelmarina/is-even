test_list = require("./test_list_100000.js").init()
console.log(test_list)

test_list.forEach(function(item){
	console.log(item)
	results = item.test()
	if (!results.status){
		console.log("Test failing: ",results.message)
		process.exit(1)
	}
})

process.exit(0)