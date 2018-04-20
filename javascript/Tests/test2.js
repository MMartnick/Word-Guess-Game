
var words = ["pacman", "mario", "kirby", "yoshi", "luigi", "contra", "zelda", "pokemon", "bonk", "digdug", "metroid", "megaman"];  
var wins = 0;
var loses = 0;
var rightLetter = [];
var wrongLetter = [];
var guessesLeft = [];
var blanks = [];
var userGuesses = [];
var wordInPlay;
var winCounter = 0;

function startGame(){
    words[Math.floor(Math.random()) * words.length];
    //picks word
    for(let i = 0; i < wordInPlay.length; i++) {
        blanks.push("_");
    }
    //populates blanks
    document.getElementById("blanks").innerHTML = blanks;
//reset
    wrongLetter = [];
    guessesLeft = [];

    document.getElementById("guesses-left").textContent =  guessesLeft;
}

function winLose();
{
    if(winCounter === wordInPlay.length){
        alert("Great Job!!");
        startGame();
    } else if(guessesLeft === 0)
    alert("Too bad")
}

document.onkeyup = function(event){
    userGuesses = event.key;
    //checks if letter is in word
    if (wordInPlay.indexOf(userGuesses) > -1 ){
        for(var i = 0; i < wordInPlay.length; i++)
        {
            if(wordInPlay[i] === userGuesses)
            {
                blanks[i] = userGuesses; 
                winCounter++;
                winLose();
            }
        }

    } else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
    } 
}

startGame();
