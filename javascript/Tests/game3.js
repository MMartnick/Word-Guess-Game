$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();

  document.getElementById(guess);
  if(guess.charAt(i).match(/[a-z]/i)){
    displayWord.push("_");
} else {
  displayWord.push(" ");
}