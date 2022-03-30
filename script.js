'use strict';
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


//function to return lowercase letters
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to retrun uppercase letters
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}+<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());