// TASK 2
// Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function getSecondsToday() {
  var now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

console.log("Total amount of seconds starting from the beginning of today and till now:", getSecondsToday());