//  1. getComputerChoice() -> script returns a random shape
//  2. round(playerSelection, computerSelection) -> plays a round of rock-paper-scissors with inputted parameter selections,
//                                                  returns a string declaring the user a winner or loser
//  3. game() -> plays five rounds of rock-paper-scissors while keeping track of scores


let shapes = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    idx = Math.floor(Math.random() * 3);
    return shapes[idx];
}

