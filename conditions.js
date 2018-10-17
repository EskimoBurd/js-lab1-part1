"use strict";

let play = confirm("Do you want to play?")
if (play === "yes") {
    //prompt to play the game
    let playerName = prompt("Enter your name.");
    let playerHealth = 40;
    let grantHealth = 10;
    let playerWins = 0;
    while (play) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
        console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
        if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
            if (userWins === 3) {
                console.log(`${userName} has won`);
                break;
            } else {
                console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more time(s).`);
            }
        }
        if (userHealth <= 0) {
            console.log("Grant has won!");
            break;
        }
    }
    //if (yes) {
    // window.prompt("please enter your name")
    // makes the window pop out to ask my name
    //console.log("name")
    // Isn't correct need to figure out how to get console log to change
    // to whatever name is entered. Green'd this out was unnecessary.
} else {
    console.log("Try again later.");
}
