var getUserChoice = function (userInput) {
    userInput = UserInput.toLowerCase();
    if (userInput==='rock'||userInput==='paper'||userInput==='paper') {
        return userInput
    } else console.log('Try Again');
}
// When invoking getUserName('ROCK'), function returns 'rock'. Is my function returning rock or 'rock'?

var getComputerChoice = function () {
    Math.floor(Math.random()*2)
    if (getComputerChoice === 0) {
        return 0;
    } else if (getComputerChoice === 1) {
        return 1; 
    } else {
        return 2;
    }
    return getComputerChoice;
}

var determineWinner = function(userChoice , computerChoice){

}
