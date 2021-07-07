//Get Elements
let player1 = document.getElementById('btn1');
let player2 = document.getElementById('btn2');

let player1ScoreBoard = document.getElementById('score1');
let player2ScoreBoard = document.getElementById('score2');

let player1ScoreTotal = document.getElementById('scoreTotal1');
let player2ScoreTotal = document.getElementById('scoreTotal2');

let game1 = document.getElementById('game1');
let game2 = document.getElementById('game2');

let welcome = document.getElementById('welcome');

let count1 = document.getElementById('count1');
let count2 = document.getElementById('count2');

let diceRoll1 = document.getElementById('dice-image1');
let diceRoll2 = document.getElementById('dice-image2');

//Dice images
let dice1 = document.getElementById('dice-roll1');
let dice2 = document.getElementById('dice-roll2');
let dice3 = document.getElementById('dice-roll3');
let dice4 = document.getElementById('dice-roll4');
let dice5 = document.getElementById('dice-roll5');
let dice6 = document.getElementById('dice-roll6');

let player2Dice1 = document.getElementById('dice2-roll1');
let player2Dice2 = document.getElementById('dice2-roll2');
let player2Dice3 = document.getElementById('dice2-roll3');
let player2Dice4 = document.getElementById('dice2-roll4');
let player2Dice5 = document.getElementById('dice2-roll5');
let player2Dice6 = document.getElementById('dice2-roll6');

//Reset Buttons
// let reset1 = document
//   .getElementById('reset1')
//   .addEventListener('click', function () {
//     location.reload();
//   });
// let reset2 = document
//   .getElementById('reset2')
//   .addEventListener('click', function () {
//     location.reload();
//   });

let reset1 = document.getElementById('reset1');
reset1.addEventListener('click', function () {
  location.reload();
});
let reset2 = document.getElementById('reset2');
reset2.addEventListener('click', function () {
  location.reload();
});

//Default text and button values
game1.innerText = 'Start Game';
welcome.innerText = '==Highest number after 10 Dice Rolls wins==';
welcome.style.color = '#ADFF2F';
document.getElementById('btn2').disabled = true;

//Add Event Listeners
player1.addEventListener('click', play1);
player2.addEventListener('click', play2);

var player1Score = 0;
var player2Score = 0;

let roll1 = 1;
let roll2 = 1;

let player1Count = 10;
let player2Count = 10;

//Game Function v1
// function play1() {
//     let random = Math.floor(Math.random() * 11);
//     player1ScoreBoard.innerText = "Your Dice roll: " + random;
//     let totalscore1 = player1Score+=random;
//     player1ScoreTotal.innerText = "Your Score: " + totalscore1;

//     game1.innerText = "Player 2 Turn";
//     game2.innerText = "Your Turn";
//     document.getElementById('btn1').disabled = true;
//     document.getElementById('btn2').disabled = false;

//     if(totalscore1 >= 50) {
//         game1.innerText = "You Won!!";
//         game2.innerText = "Player 1 Won!!";
//         game1.style.color = "green";
//         game2.style.color = "red";

//         document.getElementById('btn1').disabled = true;
//         document.getElementById('btn2').disabled = true;
//     }
// }

// function play2() {
//     let random = Math.floor(Math.random() * 11);
//     player2ScoreBoard.innerText = "Your Dice roll: " + random;
//     let totalscore2 = player2Score+=random;
//     player2ScoreTotal.innerText = "Your Score: " + totalscore2;
//     game2.innerText = "Player 1 Turn";
//     game1.innerText = "Your Turn";
//     document.getElementById('btn2').disabled = true;
//     document.getElementById('btn1').disabled = false;

//     if(totalscore2 >= 50) {
//         game2.innerText = "You Won!!";
//         game1.innerText = "Player 2 Won!!";
//         game2.style.color = "green";
//         game1.style.color = "red";

//         document.getElementById('btn1').disabled = true;
//         document.getElementById('btn2').disabled = true;
//     }
// }

//Game Function v2
function play1() {
  let random = Math.floor(Math.random() * 6) + 1;
  player1ScoreBoard.innerText = 'Your Dice roll: ' + random;
  let totalscore1 = (player1Score += random);
  player1ScoreTotal.innerText = 'Your Score: ' + totalscore1;

  roll1++;

  count1.innerText = 'Rolls remaining: ' + --player1Count;

  game1.innerText = 'Player 2 Turn';
  game2.innerText = 'Your Turn';
  welcome.innerText = '';
  document.getElementById('btn1').disabled = true;
  document.getElementById('btn2').disabled = false;
  diceRoll1.style.display = 'none';
  diceRoll2.style.display = 'unset';

  player2Dice1.style.display = 'none';
  player2Dice2.style.display = 'none';
  player2Dice3.style.display = 'none';
  player2Dice4.style.display = 'none';
  player2Dice5.style.display = 'none';
  player2Dice6.style.display = 'none';

  if (random === 1) {
    dice1.style.display = 'unset';
  } else if (random === 2) {
    dice2.style.display = 'unset';
    dice1.style.display = 'none';
  } else if (random === 3) {
    dice3.style.display = 'unset';
    dice2.style.display = 'none';
  } else if (random === 4) {
    dice4.style.display = 'unset';
    dice3.style.display = 'none';
  } else if (random === 5) {
    dice5.style.display = 'unset';
    dice4.style.display = 'none';
  } else if (random === 6) {
    dice6.style.display = 'unset';
    dice5.style.display = 'none';
  }
}

function play2() {
  let random = Math.floor(Math.random() * 6) + 1;
  player2ScoreBoard.innerText = 'Your Dice roll: ' + random;
  let totalscore2 = (player2Score += random);
  player2ScoreTotal.innerText = 'Your Score: ' + totalscore2;

  let rollsTotal = roll2++;

  count2.innerText = 'Rolls remaining: ' + --player2Count;

  game2.innerText = 'Player 1 Turn';
  game1.innerText = 'Your Turn';
  document.getElementById('btn2').disabled = true;
  document.getElementById('btn1').disabled = false;
  diceRoll2.style.display = 'none';
  diceRoll1.style.display = 'unset';

  dice1.style.display = 'none';
  dice2.style.display = 'none';
  dice3.style.display = 'none';
  dice4.style.display = 'none';
  dice5.style.display = 'none';
  dice6.style.display = 'none';

  if (random === 1) {
    player2Dice1.style.display = 'unset';
  } else if (random === 2) {
    player2Dice2.style.display = 'unset';
    player2Dice1.style.display = 'none';
  } else if (random === 3) {
    player2Dice3.style.display = 'unset';
    player2Dice2.style.display = 'none';
  } else if (random === 4) {
    player2Dice4.style.display = 'unset';
    player2Dice3.style.display = 'none';
  } else if (random === 5) {
    player2Dice5.style.display = 'unset';
    player2Dice4.style.display = 'none';
  } else if (random === 6) {
    player2Dice6.style.display = 'unset';
    player2Dice5.style.display = 'none';
  }

  if (
    rollsTotal == 10 &&
    player2ScoreTotal.innerText > player1ScoreTotal.innerText
  ) {
    game2.innerText = 'You Won!!';
    game1.innerText = 'Player 2 Won!!';
    game2.style.color = 'green';
    game1.style.color = 'red';
    diceRoll2.style.visibility = 'hidden';
    diceRoll1.style.visibility = 'hidden';
    diceRoll2.style.height = '150px';
    diceRoll1.style.height = '150px';
    reset1.style.display = 'unset';
    // reset2.style.margin = '70px';

    player2Dice1.style.visibility = 'hidden';
    player2Dice2.style.visibility = 'hidden';
    player2Dice3.style.visibility = 'hidden';
    player2Dice4.style.visibility = 'hidden';
    player2Dice5.style.visibility = 'hidden';
    player2Dice6.style.visibility = 'hidden';

    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
  } else if (
    rollsTotal == 10 &&
    player2ScoreTotal.innerText < player1ScoreTotal.innerText
  ) {
    game1.innerText = 'You Won!!';
    game2.innerText = 'Player 1 Won!!';
    game1.style.color = 'green';
    game2.style.color = 'crimson';
    diceRoll2.style.visibility = 'hidden';
    diceRoll1.style.visibility = 'hidden';
    diceRoll2.style.height = '150px';
    diceRoll1.style.height = '150px';
    reset1.style.display = 'unset';

    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';

    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
  } else if (
    rollsTotal == 10 &&
    player2ScoreTotal.innerText == player1ScoreTotal.innerText
  ) {
    game1.innerText = 'Draw Game!!';
    game2.innerText = 'Draw Game!!';
    game1.style.color = 'orange';
    game2.style.color = 'orange';

    diceRoll2.style.visibility = 'hidden';
    diceRoll1.style.visibility = 'hidden';
    diceRoll2.style.height = '150px';
    diceRoll1.style.height = '150px';
    reset1.style.display = 'unset';

    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';

    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
  }
}
