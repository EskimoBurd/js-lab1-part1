"use strict";
let playerHealth = 40;
let grantHealth = 10;
let playerWins = 0;

const startGame = () => {
    const play = prompt("Do you want to play?")
    if (play === "yes") {
        //prompt to play the game
        let playerName = prompt("Enter your name.");

        startCombat(play, playerName)
    };
}
function getDamage() {
    return Math.floor(Math.random() * 4) + 1;
}
function startCombat(play, playerName) {
    while (play) {
        const menu = prompt("Would you like to attack or quit?")
        if (menu = "attack") 
        playerHealth -= getDamage()
        grantHealth -= getDamage()
        console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
        console.log(`${playerName} was attacked. Player has ${playerHealth} health left.`);
        if (grantHealth <= 0) {
            playerWins++;
            grantHealth = 10;
            if (playerWins === 3) {
                console.log(`${playerName} has won`);
                break;
            } else {
                console.log(`${playerName} has beaten Grant. ${playerName} must win ${3 - playerWins} more time(s).`);
            }
        }
        else if (playerHealth <= 0) {
            console.log("Grant has won!");
            return;
        }
    }
}

startGame()
