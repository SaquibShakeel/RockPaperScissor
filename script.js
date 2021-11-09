"use strict";

// var player1 = document.getElementsByTagName("input")[0].value;
// var player2 = document.getElementsByTagName("input")[1].value;
// var random1 = Math.floor(Math.random() * 3) + 1;
// var random2 = Math.floor(Math.random() * 3) + 1;
// document.getElementsByClassName("image")[0].src = "images/image" + random1 + ".png";
// document.getElementsByClassName("image")[1].src = "images/image" + random2 + ".png";
// var winner;
// var draw;

const playbtn = document.querySelector(".MAIN-PLAY-BUTTON");
const stopbtn = document.querySelector(".MAIN-STOP-BUTTON");

const rockbtn = document.querySelector(".Rock");
const paperbtn = document.querySelector(".Paper");
const scissorbtn = document.querySelector(".Scissor");

const playbuttons = document.querySelector(".play-buttons");

const player1input = document.querySelector(".player-2");
const player2input = document.querySelector(".player-1");

const player1Image = document.querySelector(".player-1-image");
const player2Image = document.querySelector(".player-2-image");

const player1Score = document.querySelector(".actual-score-1");
const player2Score = document.querySelector(".actual-score-2");

let player1ScoreCounter;
let player2ScoreCounter;

let play;
let userChoice;
let AIchoice;

// INITIATING GAME
playbtn.addEventListener("click", function (e) {
    play = true;
    player1ScoreCounter = 0;
    player1Score.textContent = player1ScoreCounter;
    player2ScoreCounter = 0;
    player2Score.textContent = player2ScoreCounter;
    player1Image.style.opacity = 0;
    player2Image.style.opacity = 0;

    if (play) {
        document.querySelectorAll(".choose-buttons").forEach(function (element) {
            // element.style.remove("");
            element.style.cursor = "pointer";
        });
        playbuttons.addEventListener("click", function (button) {
            const clicked_button = button.target.closest(".choose-buttons");

            // console.log(clicked_button);
            if (clicked_button) {
                if (clicked_button.classList.contains("Rock")) {
                    userChoice = 1;
                }
                else if (clicked_button.classList.contains("Paper")) {
                    userChoice = 2;
                }
                else if (clicked_button.classList.contains("Scissor")) {
                    userChoice = 3;
                }
                AIchoice = (Math.trunc(Math.random() * 3) + 1);

                player1Image.style.opacity = 1;
                player2Image.style.opacity = 1;

                player1Image.setAttribute("src", `images/image${userChoice}.png`);
                player2Image.setAttribute("src", `images/image${AIchoice}.png`);

                console.log("CHOICES : " + userChoice, AIchoice);
            }

            if (userChoice > AIchoice) {

                if (userChoice - AIchoice === 2) {
                    player2ScoreCounter++;
                    player2Score.textContent = player2ScoreCounter;
                    // console.log("AI WON");
                } else {
                    player1ScoreCounter++;
                    player1Score.textContent = player1ScoreCounter;
                    // console.log("USER WON");
                }
            } else if (userChoice < AIchoice) {
                if (AIchoice - userChoice === 2) {
                    player1ScoreCounter++;
                    player1Score.textContent = player1ScoreCounter;
                    // console.log("USER WON");
                } else {
                    player2ScoreCounter++;
                    player2Score.textContent = player2ScoreCounter;
                    // console.log("AI WON");
                }
            } else {
                console.log("DRAW");
            }
            console.log("Counters : " + player1ScoreCounter, player2ScoreCounter);

        });
    }
});


// stopbtn.addEventListener("click", function () {
//     player1ScoreCounter = 0;
//     player1Score.textContent = player1ScoreCounter;
//     player2ScoreCounter = 0;
//     player2Score.textContent = player2ScoreCounter;

//     play = false;
//     userChoice = 0;
//     AIchoice = 0;

//     player1Image.style.opacity = 0;
//     player2Image.style.opacity = 0;

//     document.querySelectorAll(".choose-buttons").forEach(function (element) {
//         element.style.cursor = "not-allowed";
//     });
// });





// console.log(player1input, player2input);



// function clickToPlay() {
//     var player1 = document.getElementsByTagName("input")[0].value;
//     var player2 = document.getElementsByTagName("input")[1].value;
//     var random1 = Math.floor(Math.random() * 3) + 1;
//     var random2 = Math.floor(Math.random() * 3) + 1;
//     document.getElementsByClassName("image")[0].src = "images/image" + random1 + ".png";
//     document.getElementsByClassName("image")[1].src = "images/image" + random2 + ".png";
//     var winner;
//     var draw;
//     if (random1 == random2) {
//         winner = draw;
//     }
//     else if (random1 == 1 && random2 == 2) {
//         winner = player2;
//     }
//     else if (random1 == 2 && random2 == 1) {
//         winner = player1;
//     }
//     else if (random1 == 1 && random2 == 3) {
//         winner = player1;
//     }
//     else if (random1 == 3 && random2 == 1) {
//         winner = player2;
//     }
//     else if (random1 == 3 && random2 == 2) {
//         winner = player1;
//     }
//     else {
//         winner = player2;
//     }
//     if (winner == draw) {
//         document.getElementsByTagName("h1")[0].innerText = "It's a draw!!";
//     }
//     else {
//         document.getElementsByTagName("h1")[0].innerText = winner + " wins🥳🥳";
//     }
// }

// document.querySelector("button").addEventListener("click", clickToPlay);