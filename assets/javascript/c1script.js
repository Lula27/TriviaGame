// Click button to choose answer
// If correct, print "Correct!" on screen
// If wrong, print "Incorrect!"
// Point tracker: how do I connect points on various pages to app.js?

//Q: Which fictional character is not a character in Chimamanda Ngozi Adichie’s "Americanah"? 
//A: Anansi

// Response for button answer selections 
// How do I link up results here to app.js for total score tabulation?
$(document).ready(function() {

$('#atwo').on('click', function() {
	$('#result').html('<h2> Correct! </h2>');

 }); 

$('#aone, #athree, #afour, #afive').on('click', function() {
	$('#result').html('<h2> Incorrect! </h2>');

 }); 

// Automatically start 10 second timer once page loads
// Once timer hits zero, append "Time's up!" & return to main page

// Create variables
var number = 10;
var counter;

console.log(number); 

// Set up counter so that it runs with page load
function run() {
	counter = setInterval(decrement, 1000); 
}

// Define decrement function
function decrement() {

	// Decrease number by increments of one and present on page where h3 is located
	number--; 
	$('#counter').html('<h3>' + number + '</h3>');

	// When number hits zero, end timer and alert "Time's up!"
	if (number === 0) {

		alert("Time's up!")
		end();
	}; 
}

	// Define end function
	function end() {
		clearInterval(counter); 
	}

	// Execute run function.
	run(); 


});


// Also, close out and return to main page with click of button (write/wrong). No mercy!