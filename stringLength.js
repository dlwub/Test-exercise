// Task 1
const stringLength = (string) => {
	let len = string.length;
	if(1 < len && len <= 10){
		return len;
	}
	throw new Error('string length should be between 1 and 10');
	
}
//Task 2

const reverseString = (string) => string.split('').reverse.join('');

//Task 3
const calculator = {
	sum: (a, b) => a + b,
	diff: (a, b) => a - b,
	prod: (a,b) => a*b,
	quot: (a, b) => a/b
}
//Task 4
const capitalize = (str) => {
	if(typeof(str)==='string'){
		return str.charAt(0) + str.slice(1);
	}
	throw new Error('Please insert a string.');
}

module.exports = {stringLength, reverseString, calculator, capitalize};