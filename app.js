//  1. getComputerChoice() -> script returns a random shape
//  2. round(playerSelection, computerSelection) -> plays a round of rock-paper-scissors with inputted parameter selections,
//                                                  returns a string declaring the user a winner or loser
//  3. game() -> plays five rounds of rock-paper-scissors while keeping track of scores


let shapes = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    idx = Math.floor(Math.random() * 3);
    return shapes[idx];
}

function getPlayerChoice() {
    let playerChoice = prompt("Please input a shape: 'Rock', 'Paper', or 'Scissors' (Case-insensitive).");
     playerChoice = playerChoice.toLocaleLowerCase();

    playerChoice = shapes.includes(playerChoice) ? playerChoice : 'invalid';

     if (playerChoice === 'invalid') {
        console.log("Invalid Shape. Please try again.");
        return getPlayerChoice();
    }

    return playerChoice
}

function round(playerSelection, computerSelection) {

    let resultEncoding;

    if (playerSelection === computerSelection) resultEncoding = 2;

    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors')
                resultEncoding = 0;
                break;
        case 'paper':
            if (computerSelection === 'rock')
                resultEncoding = 0;
                break;
        case 'scissors':
            if (computerSelection === 'paper')
                resultEncoding = 0;
                break;
    }
    if (resultEncoding === undefined) resultEncoding = 1;

    const printResultMessage = function(resultEncoding) {

        const resultArr = ['You win!', 'You lose!', 'Draw!'];
        const verbArr = ['beats', 'loses to', 'is the same as'];

        let resultText = resultArr[resultEncoding];
        let verb = verbArr[resultEncoding];
        
        console.log(`${resultText} ${playerSelection} ${verb} ${computerSelection}.`);
    }

    printResultMessage(resultEncoding);
    return resultEncoding;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let resultEncoding = round(getPlayerChoice(), getComputerChoice());

        switch(resultEncoding) {
            case 0:
                playerScore += 1;
                break;
            case 1:
                computerScore += 1;
                break;
        }

        console.log(`Your score: ${playerScore}, Computer's score: ${computerScore}`);
    }
}