const fizzbuzz = require('./fizzbuzz');

function main (x) {
	const arr = []
	let i = 1
	while (i<=x){
		arr.push(fizzbuzz(i))
		i+=1
	}
	return (arr)
}
console.log(main(15))
