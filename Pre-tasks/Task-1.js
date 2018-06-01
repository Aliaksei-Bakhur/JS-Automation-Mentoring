// TASK 1
// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min; // generates Random integer from [min, max]
}

function getArray(n) {
  let array = [];
	for (let i = 0; i < n; i++) {
	  array.push(getRandomInteger(0, 10));
	}
	return array;
}

function compareNumeric(a, b) {
  return b - a;
}

function getMultiplyGreatestValues(array, numberOfValues) {
	if ( array.length < numberOfValues ) {
		return '\n Error: provided array has less then ' + numberOfValues + ' items. Please change "itemsInArray" parameter';
	}
	let sortedArray = array.slice().sort(compareNumeric).slice(0, numberOfValues); // create clone of array, sort it and get the biggest values
	let result = sortedArray.reduce(function(multiply, current) {
		return multiply * current;
	}, 1);
	return result
}

const itemsInArray = 10;
const numberOfValues = 3;
let myArray = getArray(itemsInArray);
console.log('Generated array with', itemsInArray, 'random integer items:\n', myArray);
console.log( 'Multiply of', numberOfValues, 'greatest values from the array: ', getMultiplyGreatestValues(myArray, numberOfValues) );