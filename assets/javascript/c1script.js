// Click button to choose answer
// If correct, print "Correct!" on screen
// If wrong, print "Incorrect!"
// Point tracker: how do I connect points on various pages to app.js?

//Q: Which fictional character is not a character in Chimamanda Ngozi Adichie’s "Americanah"? 
//A: Anansi

// Response for button answer selections 
$(document).ready(function() {

$('#atwo').on('click', function() {
	$('#result').html('<h2> Correct! </h2>');

 }); 

$('#aone').on('click', function() {
	$('#result').html('<h2> Incorrect! </h2>');

 }); 

$('#athree').on('click', function() {
	$('#result').html('<h2> Incorrect! </h2>');

 }); 

$('#afour').on('click', function() {
	$('#result').html('<h2> Incorrect! </h2>');

 }); 


$('#afive').on('click', function() {
	$('#result').html('<h2> Incorrect! </h2>');

 }); 


});

// It works but clean up this code! Waaaaay too redunant. Plus, how do I link up results here to app.js for total score tabulation?
