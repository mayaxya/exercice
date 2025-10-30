
const fizzbuzz = require('./fizzbuzz');

test("donne suite nombre jusqu'a 1", ()=>{
	expect(fizzbuzz(1)).toBe(1)
})

test("pour 2",()=>{
	expect(fizzbuzz(2)).toBe(2)
})

test("pour 3",()=>{
	expect(fizzbuzz(3)).toBe("fizz")
})

test("pour 5",()=>{
	expect(fizzbuzz(5)).toBe("buzz")
})

test("pour 15",()=>{
	expect(fizzbuzz(15)).toBe("fizzbuzz")
})
