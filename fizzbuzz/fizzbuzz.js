function fizzbuzz (x) {
	let multip15 =x/15
	let multip5 = x/5
	let multip3 = x/3
	if (Number.isInteger(multip15) === true) {
		return("fizzbuzz")
	}
	else if (Number.isInteger(multip5) === true) {
		return("buzz")
	}
	else if (Number.isInteger(multip3) === true) {
		return("fizz")
	}
	else return (x)
}

module.exports = fizzbuzz;
