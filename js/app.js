$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*Computer Selects Number 1-100*/
var answer = Math.floor((Math.random() * 100) +1);
console.log (answer);

/*Create User Guess Variable*/
var Guess;
//console.log(Guess)

  $( 'form' ).bind('keypress', function(e){
      if ( e.keyCode == 13 ) {
        return false;
      }
  });

  var numGuesses = 0;

  /* New Game Button (No Server Call */
 $(".new").click(function() {
  var answer = Math.floor((Math.random() * 100) +1);
  console.log (answer);
  numGuesses = 0;
  $('#count').text(numGuesses);
  $("#feedback").text("Make your Guess!");
  $("#guessList").text("");
  $("#userGuess").val("");
 });

  	/*Feedback  div#feedback */
    $('#guessButton').click(function(event) {
      event.preventDefault();
      numGuesses++;
      Guess = $("#userGuess").val();
      $('#count').text(numGuesses);
      console.log(Guess);

      if (Guess > 100) {
        alert("The number must be between 1 and 100!");
        $("#feedback").text("Out of Range.");
        $("#guessList").append('<li>'+ Guess + ' Out of Range</li>');
      }

      if (Guess < 0) {
        alert("The number must be between 1 and 100!");
        $("#feedback").text("Out of Range.");
        $("#guessList").append('<li>'+ Guess + ' Out of Range</li>');
      }

      /* Just Right */
      if (Guess == answer) {
        $("#feedback").text("You Got It!!");
        $("#guessList").append('<li>'+ Guess + ' You Got It!!</li>');
      }

      /* A Bit Too High */
      else if ((Guess <= (answer + 20)) && (Guess > answer) && (Guess >= (answer + 10))) {
  		  $("#feedback").text("You're Getting Warm but Too High");
        $("#guessList").append('<li>'+ Guess + ' Too High</li>');
      }

  		/* Much too High */
      else if (Guess > (answer +20) && (Guess < 100)) {
  		  $("#feedback").text("You're Cold - Too High");
        $("#guessList").append('<li>'+ Guess + ' Too High</li>');
      }
      
      /* Oh so Close */ 
  			/*Low*/
        else if ((Guess < (answer + 10)) && (Guess > answer)) {
          $("#feedback").text("You're Very Close but Too High");
          $("#guessList").append('<li>'+ Guess + ' Too High</li>');
        }
  			/*High*/
        else if ((Guess > (answer - 10)) && (Guess < answer)) {
          $("#feedback").text("You're Very Close but Too Low");
          $("#guessList").append('<li>'+ Guess + ' Too Low</li>');
        }
  		/* A bit too Low */
      else if ((Guess >= (answer - 20)) && (Guess < answer) && (Guess <= (answer - 10))) {
       $("#feedback").text("You're Getting Warm but Too Low");
       $("#guessList").append('<li>'+ Guess + ' Too Low</li>');
      }
  		/* Much too Low */
      else if (Guess < (answer - 20) && (Guess > 0)) {
        $("#feedback").text("You're Cold - Too Low");
        $("#guessList").append('<li>'+ Guess + ' Too Low</li>');
      }
    });

});


