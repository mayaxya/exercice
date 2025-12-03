const fizzbuzz = require('./fizzbuzz');
//recup fizzbuzz function

function main (x) {
	let i = 1
	while (i<=x){
		console.log (fizzbuzz(i))
		i+=1
	}
}

let n = process.argv
 main(n[2])
// run main function in CLI with "node callfizzbuzz.js n" with n being the number until wich we wanna go



const testable = (n, main) => {
	let result = []
	result.push(main(n))
	return (result)
}

testable(n[2],main)



module.exports = main;
// in case needed for test


