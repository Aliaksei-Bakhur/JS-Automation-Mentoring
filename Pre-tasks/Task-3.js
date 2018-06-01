// TASK 3
// Define an object happiness within 5 properties. Each property should have default integer value, representing its priority.
// Then create a function that returns a list of property names sorted by priority (highest is on top).
  
function compareNumericProperty(a, b) {
  return b[1] - a[1];
}
  
function getPropertiesSortedByPriority(object) {
  var tempArray = [];
  for (var key in object) {
    tempArray.push([key, object[key]]);
  }
  tempArray.sort(compareNumericProperty);
  return tempArray.map(name => name[0]);
}
    
var happiness = {
  "work life balance": 8,
  "job satisfaction": 6,
  "health": 9,
  "family": 10,
  "religion": 5
};    
console.log( getPropertiesSortedByPriority(happiness) );