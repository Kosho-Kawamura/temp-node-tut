const { readFile, writeFile} = require('fs')

console.log('start')
readFile('./tutorial/content/first.txt', 'utf8', (err,result)=>{
	if(err){
		console.log(err)
		return
	}
	const first = result;
	readFile('./tutorial/content/first.txt', 'utf8', (err,result)=>{
		if(err){
			console.log(err)
			return
		}
		const second = result;
		writeFile(
			'./tutorial/content/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err)
					return
				}
				console.log('done with this task')
			}
		)
	})
})
console.log('starting next task')