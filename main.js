var getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb') {
        return userInput
    } else console.log('Try Again');
}

var getComputerChoice = (computerChoice) => {
    computerChoice = Math.floor(Math.random()*3)
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper'; 
    } else {
        return 'scissors';
    }
 } 

var determineWinner = (userChoice, getComputerChoice) => {
    if (userChoice === 'bomb') {
        return 'You Won'
    } else if (userChoice === getComputerChoice) {
        return 'The Game Was Tied';
    } else if (userChoice === 'rock' && getComputerChoice === 'paper') {
        return 'You Lost';
    } else if (userChoice === 'rock' && getComputerChoice === 'scissors') {
        return 'You Won';
    } else if (userChoice === 'paper' && getComputerChoice === 'scissors') {
        return 'You Lost';
    } else if (userChoice === 'paper' && getComputerChoice === 'rock') {
        return 'You Won';
    } else if (userChoice === 'scissors' && getComputerChoice === 'rock') {
        return 'You Lost';
    } else if (userChoice === 'scissors' && getComputerChoice === 'paper') {
        return 'You Won';
    } 
} 

var playGame = () => {
    var userChoice = getUserChoice('bomb');
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    return determineWinner(userChoice, computerChoice);
} 
console.log(playGame());
