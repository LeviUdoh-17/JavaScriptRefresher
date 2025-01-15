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

rock.addEventListener('click', () => {
    const computerMove = pickComputerMove();
    let result;
    if(computerMove == 'Rock'){
        result = 'Tie.';
    } else if (computerMove == 'Paper'){
        result = 'You Lose.';
    } else if (computerMove == 'Scissors'){
        result = 'You Win.';
    }
    alert(`You picked Rock, the computer picked ${computerMove}, ${result}`);
});

paper.addEventListener('click', () => {
    const computerMove = pickComputerMove();
    let result;
    if(computerMove == 'Rock'){
        result = 'You Win.';
    } else if (computerMove == 'Paper'){
        result = 'Tie.';
    } else if (computerMove == 'Scissors'){
        result = 'You Lose.';
    }
    alert(`You picked Paper, the computer picked ${computerMove}, ${result}`);
});

scissors.addEventListener('click', () => {
    const computerMove = pickComputerMove();
    let result;
    if(computerMove == 'Rock'){
        result = 'You Lose.';
    } else if (computerMove == 'Paper'){
        result = 'You Win.';
    } else if (computerMove == 'Scissors'){
        result = 'Tie.';
    }
    alert(`You picked Scissors, the computer picked ${computerMove}, ${result}`);
});
