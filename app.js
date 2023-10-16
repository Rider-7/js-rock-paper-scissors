function getComputerChoice() {
    const shapes = ['rock', 'paper', 'scissors'];

    idx = Math.floor(Math.random() * 3);
    return shapes[idx];
}

function round(playerSelection, computerSelection) {
    // Maps results as follows: {0: Win, 1: Lose, 2: Draw}
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

    var victorMessage;
    var infoMessage;
    const getResultMessages = (resultEncoding) => {

        const resultArr = ['You win!', 'You lose!', 'Draw!'];
        const verbArr = ['beats', 'loses to', 'is the same as'];

        let resultText = resultArr[resultEncoding];
        let verb = verbArr[resultEncoding];
        
        victorMessage = `${resultText}`;
        infoMessage = `${playerSelection} ${verb} ${computerSelection}.`;
    }

    getResultMessages(resultEncoding);
    return [resultEncoding, victorMessage, infoMessage];
}

let playerScoreVal = 0;
let computerScoreVal = 0;
let numOfRounds = 0;

const playerScore = document.querySelector('.scoreboard > #player > .score');
const computerScore = document.querySelector('.scoreboard > #computer > .score');

const victor = document.querySelector('.result > .victor');
const info = document.querySelector('.result > .info');

const selection = document.querySelector('.selection');

selection.addEventListener('click',(e) => {
    let playerChoice = e.target.id;
    let [resultEncoding, victorMessage, infoMessage]  = round(playerChoice, getComputerChoice())

    victor.textContent = victorMessage;
    info.textContent = infoMessage;

    switch(resultEncoding) {
        case 0:
            playerScoreVal += 1;
            playerScore.textContent = playerScoreVal;
            break;
        case 1:
            computerScoreVal += 1;
            computerScore.textContent = computerScoreVal;
            break;
    }
    });