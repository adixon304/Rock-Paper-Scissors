function computerPlay() {
    var arrOptions  = ["Rock", "Paper", "Scissors"];
    var intOptionIndex = Math.floor(Math.random() * arrOptions.length);
    return arrOptions[intOptionIndex]
}

function playRound(playerSelection, computerSelection) {

    //Ensure all case accepted in evaluation
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Evaluate outcome
    let result = 0 //0 Tie, 1 Player, 2 Computer
    switch (playerSelection, computerSelection) {        
        case playerSelection = "rock", computerSelection = "rock":
            break;
        case playerSelection = "rock", computerSelection = "paper":
            result = 2;
            break;
        case playerSelection = "rock", computerSelection = "scissors":
            result = 1;
            break;
        case playerSelection = "paper", computerSelection = "rock":
            result = 1;
            break;
        case playerSelection = "paper", computerSelection = "paper":
            break;
        case playerSelection = "paper", computerSelection = "scissors":
            result = 2;
            break;
        case playerSelection = "scissors", computerSelection = "scissors":
            break;
        case playerSelection = "scissors", computerSelection = "paper":
            result = 1;
            break;
        case playerSelection = "scissors", computerSelection = "rock":
            result = 2;
            break;  
    }

    return result
}

function game() {

    let playerWins = 0 
    let computerWins = 0
    for (i = 1; i <= 5; i++) {

        let playerSelection = prompt("What is your selection?")

        //Ensure playerSelection is valid
        if (!playerSelection) {
            return "Player must make a selection."
        }
    
        //Get random selection for the computer
        let computerSelection = computerPlay()
    
        //Play a round
        let roundResult = playRound(playerSelection, computerSelection)
    
        let roundStringResult = ""
        switch (roundResult) { 
            case roundResult = 0:
                roundStringResult = "Tie!";
                break;
            case roundResult = 1:
                playerWins = playerWins + 1;
                roundStringResult = "Player Wins!";
                break;
            case roundResult = 2:
                computerWins = computerWins + 1;
                roundStringResult = "Computer Wins!";
                break;
        };      
        
        let round = "Round " + i + " | ";
        let selection = "Player selected " + playerSelection + " Computer selected " + computerSelection + " | ";
        let score = " Score - Player Wins: " + playerWins.toString() + " Computer Wins: " + computerWins.toString();
        let finalResult = ""
        if (i == 5) {

            if (playerWins > computerWins) {
                finalResult = " | Player Wins Overall - Congratulations!";
            } else if(computerWins > playerWins) {
                finalResult = " | Computer Wins Overall - Try again!";
            } else {
                finalResult = " | Tied Overall - Try again!";
            };

        };

        let summary = round.concat(selection, roundStringResult, score, finalResult);

        console.log(summary)

    }

}