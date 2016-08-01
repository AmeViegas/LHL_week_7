var prompt = require('prompt-sync')();
var bankroll = 100;
var notDone = true;
while (bankroll > 0 && notDone) {
  var player_bet = getBet();
  if (notDone){
    var player_guess = getGuess();

    var number_is = Math.floor((Math.random() * 10) + 1);

    console.log("Your bet was " + player_bet + " and your guess " + player_guess +
        "\n number is " + number_is);

    checkWinLoss(number_is, player_guess, player_bet);
  }
}

function checkWinLoss(number_is, player_guess, player_bet) {
    if ((number_is == player_guess) ||
        (number_is == plus1(player_guess)) ||
        (number_is == minus1(player_guess))) {
        bankroll += player_bet;
        console.log( "\nYou have won! Your bankroll is: " + bankroll);
    } else {
        checkLoss(player_bet);
        if (bankroll == 0) {
          console.log("\nYou have lost! Game Over ");
          notDone = false;
        } else {
          console.log("\nYou have lost! Your bankroll is: " + bankroll);
        }
    }
}

function checkLoss(player_bet) {
    bankroll -= player_bet;
    if (bankroll < 5) {
        bankroll = 0;
    }
}

function getBet() {
    var player_bet = 0;
    while (player_bet < 5 || player_bet > 10) {
        player_bet = parseInt(prompt("Place your bet, between $5 and $10. Also, within your bankroll: "));

        if (player_bet > bankroll) {
            player_bet = 0;
        }

        if(isNaN(player_bet) ){
          player_bet = 0;
        }

    }
    return player_bet;
}

function getGuess() {
    var player_guess = 0;
    while (player_guess < 1 || player_guess > 10) {
        player_guess = parseInt(prompt("Guess a number between 1 and 10: "));
    }
    return player_guess;
}

function plus1(guess) {
    return (guess + 1);
}

function minus1(guess) {
    return (guess - 1);
}
