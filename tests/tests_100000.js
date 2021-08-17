test_list = require("./test_list_100000.js").init()

test_list.forEach(function(item){
	results = item.test()
	if (!results.status){
		console.log("Test failing: ",results.message)
		process.exit(1)
	}
})

process.exit(0)