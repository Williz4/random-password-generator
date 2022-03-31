'use strict';
const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//event listener for the clipboard element to enable copy paste functionality
clipboardEl.addEventListener('click', () => {
	//we create a textarea and a password variable which points to the result's element innerText
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText

	//if there is no password then we return immediately
	if(!password) {
		return
	}

	//if the password exist we assign it to the newly created textarea and we append the textarea to the body and select it and use the execCommand to run the copy method and remove he textarea from the dom and issue an alert statement that the password has been copied
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove()
	alert('Password copied to clipboard');
})

//event listener to the generate password button
generateEl.addEventListener('click', ()=> {
	const length = +lenghtEl.value;

	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr =[{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	if(typesCount === 0) {
		return '';
	}

	for(let i = 0; i < length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0]
			generatedPassword += randomFunc[funcName]();
		})
	}

	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}

//function to return random lowercase letters
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to retrun random uppercase letters
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function to return random number
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//function to return random symbol
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}+<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
