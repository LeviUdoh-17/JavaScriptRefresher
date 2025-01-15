const buttons = document.querySelectorAll('button');
const rock = buttons[0];
const paper = buttons[1];
const scissors = buttons[2];
const reset = buttons[3];

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result;
    
    if (playerMove == 'Rock'){    
        if(computerMove == 'Rock'){
            result = 'Tie.';
        } else if (computerMove == 'Paper'){
            result = 'You Lose.';
        } else if (computerMove == 'Scissors'){
            result = 'You Win.';
        }
    } else if (playerMove == 'Paper'){    
        if(computerMove == 'Rock'){
            result = 'You Win.';
        } else if (computerMove == 'Paper'){
            result = 'Tie.';
        } else if (computerMove == 'Scissors'){
            result = 'You Lose.';
        }
    } else if (playerMove == 'Scissors'){    
        if(computerMove == 'Rock'){
            result = 'You Lose.';
        } else if (computerMove == 'Paper'){
            result = 'You Win.';
        } else if (computerMove == 'Scissors'){
            result = 'Tie.';
        }
    }
    if(result === "You Win."){
        scores.win += 1;
    } else if(result === "You Lose."){
        scores.losses += 1;
    } else if(result === 'Tie.'){
        scores.ties += 1;
    }

    alert(`You picked ${playerMove}, the computer picked ${computerMove}, ${result}\nWins: ${scores.win}, Losses: ${scores.losses}, Ties: ${scores.ties}`);
}

let scores = {
    win: 0,
    losses: 0,
    ties: 0
};

reset.addEventListener('click', () => {
    scores.win = 0;
    scores.losses = 0;
    scores.ties = 0;
});

rock.addEventListener('click', () => playGame('Rock'));
paper.addEventListener('click', () => playGame('Paper'));
scissors.addEventListener('click', () => playGame('Scissors'));
