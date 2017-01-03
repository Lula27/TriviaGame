// Prepare for take off! 
// Create multiple js files to store information for various pages of game 
// Somehow find a way to connect them all
// Show correct answer on page
// Automatically open new page that displays correct answer if wrong answer is selected
// Connect the answer page with the main page after 5 seconds 

$(document).ready(function(){


// Tracking Scores-run functions for win count here! 

// Create Variables for wins/losses 
	var wins = 0; 


function winning () {

	wins++;
	
		$('#wins').html(wins); 
	
	}

// Run win count 
winning();





}); 
