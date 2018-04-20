

var words = ["pacman", "mario", "kirby", "yoshi", "luigi", "contra", "zelda", "pokemon", "bonk", "digdug", "metroid", "megaman"];  

let randomNumber = Math.floor(Math.random() * words.length);
let wordInPlay = words[randomNumber];
let rightLetter = [];
let wrongLetter = [];
let blanks = [];
let usedKeys = document.getElementsByClassName("blanks");
let rightGuess = document.getElementsByClassName("rightGuess");
let wrongAnswers = document.getElementsByClassName("wrongAnswers");
console.log(wordInPlay);
    
let underscores = () => {
    for(let i = 0; i < wordInPlay.length; i++) {
        blanks.push("_");
        
    }
    return blanks;
}
console.log(underscores());
//get guess
document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(event.keyCode);

// Checks letters
    if (wordInPlay.indexOf (keyWord) > -1) {
            //add to right words array
        rightLetter.push(keyWord);
// replace underscore with letter
        blanks[wordInPlay.indexOf(keyWord)] = keyWord;

        usedKeys[0].innerHTML = blanks.join(" ");
        rightGuess[0].innerHTML = rightLetter;
 //checks to see if word matches guesses
        if(blanks.join("") == wordInPlay) {
            alert("Great Job!")
        }
    } else {
        wrongLetter.push(wrongAnswers);
        wrongAnswers[0].innerHTML = wrongAnswers;
        wrongLetter[0].innerHTML = wrongAnswers.join("");
    }
}); 



