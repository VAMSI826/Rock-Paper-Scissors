let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  tie: 0
};

updateScoreElement();

function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'scissors'){
  if(computerMove === 'rock'){
    result = 'You loose.'
  }else if(computerMove === 'paper'){
    result = 'You win.';
  }else if(computerMove === 'scissor'){
    result = 'Tie.';
  }
}
else if(playerMove === 'paper'){

  if(computerMove === 'rock'){
    result = 'You win.'
  }else if(computerMove === 'paper'){
    result = 'Tie.';
  }else if(computerMove === 'scissor'){
    result = 'You loose.';
  }
}
else if(playerMove === 'rock'){
  if(computerMove === 'rock'){
  result = 'Tie.'
}else if(computerMove === 'paper'){
  result = 'You loose.';
}else if(computerMove === 'scissor'){
  result = 'You win.';
}
}
if(result === 'You win.'){
score.wins += 1;
}else if(result === 'You loose.'){
score.losses += 1;
}else if(result === 'Tie.'){
score.tie += 1;
}

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `you <img src="${playerMove}-emoji.png" alt="r" class="move-icon">    
<img src="${computerMove}-emoji.png" alt="s" class="move-icon">Computer `;

}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
  }

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove= '';
      if(randomNumber >= 0 && randomNumber <1/3){
      computerMove = 'rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'scissors';
    }
    return computerMove;
}
