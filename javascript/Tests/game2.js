
// default var

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();

var words = ["megaman", "mario", "kirby", "yoshi", "castlevania", "final fantasy", "double dragon", "metal gear"];
var wordInPlay = words[Math.floor(Math.random() * words.length)]
var displayWord = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guesses = 8;
var win = 0;
var goodGuess = 0;
var userGuess 
var gameOver = false;

var checkguess

//  charAt(i) returns the first character of a string, paired with .match(/[a-z])/i))
//  should scrape var letters to find a match to letter input

for(var i=0; i<wordInPlay.length; i++){
    if(wordInPlay.charAt(i).match(/[a-z]/i)){
        displayWord.push("_");
    } else {
      displayWord.push(" ");
    }
}

/*
		========= checkGuess() =========
		checkGuess will take a users input and run the game logic on it.


		========= Game Logic ========
		First Check: Is the user input valid? 
						Valid input is all lowercase letters a - z
						Invalid input is anything else (example: Shift, Enter, 0 - 9, etc.)
						If it is then we can check to see if it is in the currentWord
						If not then we need to see if it is already guessed or if it is invalid
			Second Check: Is the user input in the currentWord? 
							If it is then we process the letter
								Loop through the displayWords Array and replace all the _ with the user's letter. 
									From there we track the goodGuesses, 
									remove the letter from avaiable guesses, and update the display.
								Then check if they have guessed all the letters in currentWord
									If they have
										Game is won.
										Update Display
										set isGameOver to true and game ends
							If it is not then we check how many guesses they have left.
								If they do then 
									we remove a guess, 
									remove the user guess from avaiable guesses 
									update the game
								If they have none then we set 
									Update Display for game over
									isGameOver to true and the game ends



		NOTE: User Input must be a string

		checkGuess(string UserGuess)
    */
     checkGuess = function(userGuess)

		// Check if what they selected is available
		if(this.letters.indexOf(userGuess) > -1){
			this.warnDisp.textContent = "";

			// if it is we check it versus the current word
			if(this.currentWord.includes(userGuess)){
				
				// We found a match
				for(var i=0; i<this.currentWord.length; i++){
			        if(this.currentWord.charAt(i)===userGuess){
			          this.displayWord[i] = userGuess;
			          this.goodLetterGuess++;
			          this.wordDisp.textContent = this.displayWord.join(" ");
			          this.letters = this.letters.filter( a => a !== userGuess);
			        }
			    }

			    // Play goodGuess Sound Effect
			    this.goodGuess.play();
			     

			     
				// check if user's amount of good guesses has reached length of the word
				if(this.goodLetterGuess === this.currentWord.length ){
					// if so user has won!
					this.wins++;
					this.isGameOver = true;
					this.wordDisp.textContent = this.displayWord.join(" ");
					this.warnDisp.textContent = "You Won!!! Press Any Key to restart!";
				}
						
				
			} else {
				// otherwise then we see if they still have guesses left
				if(this.guesses > 0){
					this.badGuess.play();
					// if they do then we remove a guess and add their current guess to the list of guessed letters and remove from valid guesses
					this.letters = this.letters.filter( a => a !== userGuess);
					this.guesses--;
					this.guessLtrDisp.textContent += userGuess + " " ;
				} else {
					// play Game Over
					this.gameOverSound.play();
					// if they dont then Game Over
					this.warnDisp.textContent = "You lost! Press Any Key to restart!";
					this.wins = 0;
					this.isGameOver = true;
					

				}
			}
		} else {
			//this.warningSound.play();
			// Check User Input
			if(userGuess.match(/^[a-z]+$/)){
				this.warnDisp.textContent = "You have already guessed " + userGuess;
			} else {
				// Else they didn't enter a valid key tell
				this.warnDisp.textContent = "You didn't enter a valid letter. Please try again.";
			}
		}
	}
}

// ========== Javascript Setup ==========
/*
	This section is where we setup the javascript to grab the displays we are using in HTML.
	We will pass the selected objects into the game object using the startGame method later.
	
	Aftewards we run the game.startGame() passing in the neccesary Display Hooks for the game object to use.
	
	Then we setup an onkeyup event on the DOM to get the user's input.

	Finally we will check if the isGameOver is true and if not we will check the user's input and see if they
	entered a valid guess.
*/

// Grab Display Hooks from HTML







// .charAt() returns the first character in a string, combined with .match(/[a-z]/i) 
//should scrape var letters for character input 

var currentWordDisp = document.querySelector("#currentWord");
var currentGuessDisp = document.querySelector("#guesses");
var winsDisp = document.querySelector("#wins");
var guessLetterDisp = document.querySelector("#guessedLetters");
var warningDisp = document.querySelector("#warning");


// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
// Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches,
// use the querySelectorAll() method instead. If the selector matches an ID in document that is used several times (Note that an "id" should be unique within
// a page and should not be used more than once), it returns the first matching element.
// For more information about CSS Selectors, visit our CSS Selectors Tutorial and our CSS Selectors Reference.

// User Input Runs the game loop
document.onkeyup = function(e){
	// Check if Game is Over
	if(game.isGameOver === false){
		// Check User Input for Key pressed	
		game.checkGuess(e.key);
		game.displayGame();
	} else {
		// Restart the game
		game.startGame(currentWordDisp,currentGuessDisp, winsDisp, guessLetterDisp, warningDisp);
		console.log("Restarted Game");
		
	}
}


