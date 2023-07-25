let playerSelection;
function capitalize(p){
    //if 
    return p
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if(rand===0){
        return `Rock`
    }if(rand===1){
        return `Papers`
    }if(rand===2){
        return `Scissors`
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `${playerSelection} with ${playerSelection}! Tie!`
    }else if(playerSelection === `Rock` && computerSelection === `Scissors`){
        return 'a'
    }else if(playerSelection === `Rock` && computerSelection === `Papers`){
        return 
    }else if(playerSelection === `Papers` && computerSelection === `Scissors`){
        return  'a'
    }else if(playerSelection === `Papers` && computerSelection === `Rock`){
        return
    }else if(playerSelection === `Scissors` && computerSelection === `Papers`){
        return 'a'
    }else if(playerSelection === `Scissors` && computerSelection === `Rock`){
        return  'a'
    }
}

function game(playerSelection){
    for(let i=0;i<5;i++){
        playerSelection; 
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        let print = playRound(playerSelection, computerSelection);
        console.log(print);
    }
}

const btn = document.querySelector('.Play');
btn.addEventListener('click', () => {
    const selection = document.querySelector('.selection')
    const Rock = document.createElement('button')
    const Papers = document.createElement('button')
    const Scissors = document.createElement('button')
    Rock.classList.add('Rock')
    Papers.classList.add('Papers')
    Scissors.classList.add('Scissors')
    Rock.textContent = 'Rock'
    Papers.textContent = 'Papers'
    Scissors.textContent = 'Scissors'
    selection.appendChild(Rock)
    selection.appendChild(Papers)
    selection.appendChild(Scissors)
});
function saas(){
    const bRock = document.querySelector('.Rock');
    const bPapers = document.querySelector('.Papers');
    const bScissors = document.querySelector('.Scissors');
bRock.addEventListener('click', () => {
    playerSelection =  'Rock'
    game(playerSelection)
    saas()
});

bPapers.addEventListener('click', () => {
    playerSelection =  'Papers'
    game(playerSelection)
    saas()
});

bScissors.addEventListener('click', () => {
    playerSelection =  'Scissors'
    game(playerSelection)
    saas()
});
}

saas()


