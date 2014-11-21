
$(document).ready(function(){

var randomNum;
var guessCount;


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

	/*--- New game ---*/
  	$(".new").click(function(){
		newGame();
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".info").fadeOut(1000);
  		$(".overlay").fadeOut(1000);
  	});


	var newGame = function(){
		randomNum = Math.floor((Math.random() * 100) + 1);
		guessCount = 1;
		console.log(randomNum);
		$("#feedback").text("Make a Guess");
		$("#guessList").text(" ");
		$('#userGuess').val(" ");
		$('#count').text("1");
		$(".overlay").fadeIn(1000);
		$(".content").fadeIn(1000);

	};
 		newGame();
	
	$('#guessButton').click(function(){
		userGuess = $('#userGuess').val();
		if (userGuess >= 1 && userGuess <= 100){
			guessCount++;
			$('#count').text(guessCount);
			console.log(userGuess);
			listGuess(userGuess);
			compare(userGuess);
			return false;

		} else {
			$("#feedback").text("Please make a guess between 1 and 100");
			return false;
		}
	});

	var listGuess = function(userGuess){
		$("#guessList").append("<li>" + userGuess + "</li>");
	};


	var compare = function(userGuess){
		var difference = Math.abs(userGuess - randomNum);
		if (userGuess == randomNum){
			winner();

		} else if
			(difference <= 10){
			$("#feedback").text("very hot");	
		}
		else if (difference > 11 && difference < 20) {
			$("#feedback").text("hot");
		}
		else if (difference > 21 && difference < 30) {
			$("#feedback").text("warm");
		}
		else if (difference > 31 && difference < 50) {
			$("#feedback").text("cold");
		}
		else {
			$("#feedback").text("very cold");
		}
	}

	var clearfield = function(){
		$('#userGuess').val(" ");
	}
	

	var winner = function(){
		$("#feedback").text("WINNER!");
		$("#info").fadeOut(1000);
		$(".overlay").fadeIn(1000);
		$(".winner").fadeIn(1000);

  	}

});


