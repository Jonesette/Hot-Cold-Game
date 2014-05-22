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


var randomizer = function() {
  return Math.floor((Math.random() * 100) +1);
};

var answer = randomizer();
//console.log (answer);

/*Create User Guess Variable*/
var Guess;
var Compare;

  var numGuesses = 0;

  var newGame = function() {
    answer = randomizer();
    //console.log (answer);
    $('form').show();
    $('#guessCount').show(); 
    numGuesses = 0;
    $('#count').text(numGuesses);
    $("#feedback").text("Make your Guess!");
    $("#guessList").text("");
    $("#userGuess").val("");
  };

  /* New Game Button (No Server Call */
     $(".new").click(function() {
      newGame();
     });

  $('#userGuess').focus(function() {
    this.value = '';
  });

  $('#userGuess').click(function() {
    this.value = '';
  });

  	/*Feedback  div#feedback */
    $('#guessButton').click(function(event) {
      event.preventDefault();
      Guess = +$("#userGuess").val();
      Compare = Math.abs(Guess - answer);
      //console.log(Guess);
      //console.log(Compare);

      if ((Guess > 100) || (Guess <= 0) || (isNaN(Guess))) {
      alert("The number must be between 1 and 100!");
      $("#userGuess").val("");
      }  

      else {   
      numGuesses++;
      $('#count').text(numGuesses);

        /* Just Right */
        if (Compare == 0) {
            var correct = confirm("You Win!! Want to Play Again?");
            if (correct) {
              newGame();
            }
            else {
              $("#feedback").text("Thanks for Playing!");
              $('form').hide();
              $('#guessCount').hide(); 
            }
        }

        else if (Guess > answer) {
          if (Compare <=10) {
            $("#feedback").text("You're Very Close but Too High");
          }
          else if (Compare <=20) {
            $("#feedback").text("You're Getting Warm but Too High");
          }
          else {
            $("#feedback").text("You're Cold - Too High");
          }

          $("#guessList").append('<li>'+ Guess + ' Too High</li>');

        }

        else {
          if (Compare <=10) {
            $("#feedback").text("You're Very Close but Too Low");
          }
          else if (Compare <=20) {
            $("#feedback").text("You're Getting Warm but Too Low");
          }
          else {
            $("#feedback").text("You're Cold - Too Low");
          }

          $("#guessList").append('<li>'+ Guess + ' Too Low</li>');
        }
      }
    });

});


