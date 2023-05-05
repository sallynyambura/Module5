var table = prompt("Enter a number: ");             // Unit of table
//var operator = 'addition';                       // Type of calculation             
var msg = '<h2> Multiplucation Table</h2>';       // Message

// Do addition

/* 
if (operator === 'addition') {
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
*/

// Do multiplication

var i = 1; // Set counter to 1   
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

//}

// Write the message into the page

var el = document.getElementById('blackboard');
el.innerHTML = msg;