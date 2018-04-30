// TASK 1
// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min; // generates Random integer from [min, max]
} 
  
function getArray(n) {
  var array = [];
	for (var i = 0; i < n; i++) {
	  array.push(getRandomInteger(0, 10));
	}
	return array;
}
  
function compareNumeric(a, b) {
  return a - b;
}
  
function getMultiplyOfThreeGreatestValues(array) {
  if ( array.length >= 3 ) {
    var sortedArray = array.slice().sort(compareNumeric);
	  return sortedArray[sortedArray.length - 1] * 
           sortedArray[sortedArray.length - 2] *
			     sortedArray[sortedArray.length - 3];
	}
	return "Provided array has less then 3 items";
}

var itemsInArray = 10;
var myArray = getArray(itemsInArray);
console.log('Generated array with', itemsInArray, 'random integer items:\n', myArray);
console.log( 'Multiply of 3 greatest values from the array: ', getMultiplyOfThreeGreatestValues(myArray) );