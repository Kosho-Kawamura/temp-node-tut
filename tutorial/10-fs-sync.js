const { readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./tutorial/content/first.txt', 'utf8');
const second = readFileSync('./tutorial/content/second.txt', 'utf8');

writeFileSync(
	'./tutorial/content/result-sync.txt',
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
