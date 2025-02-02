const buttons = document.querySelectorAll('button');
const rock = buttons[0];
const paper = buttons[1];
const scissors = buttons[2];

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
        alert(`You picked Rock, the computer picked ${computerMove}, ${result}`);
    } else if (playerMove == 'Paper'){    
        if(computerMove == 'Rock'){
            result = 'You Win.';
        } else if (computerMove == 'Paper'){
            result = 'Tie.';
        } else if (computerMove == 'Scissors'){
            result = 'You Lose.';
        }
        alert(`You picked Paper, the computer picked ${computerMove}, ${result}`);
    } else if (playerMove == 'Scissors'){    
        if(computerMove == 'Rock'){
            result = 'You Lose.';
        } else if (computerMove == 'Paper'){
            result = 'You Win.';
        } else if (computerMove == 'Scissors'){
            result = 'Tie.';
        }
        alert(`You picked Scissors, the computer picked ${computerMove}, ${result}`);
    }

}

rock.addEventListener('click', playGame('Rock'));
paper.addEventListener('click', playGame('Paper'));
scissors.addEventListener('click', playGame('Scissors'));
