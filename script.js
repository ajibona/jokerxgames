const compScores = document.querySelector('.js__comp--scores');
const scoresDisplay = document.querySelector('.scores__display');
const inputBox = document.getElementById('playerInput');
const submitBtn = document.querySelector('.js__btn')
const errorInfo = document.querySelector('.js__error');
const messageBoard = document.querySelector('.message__board');
const cashoutMoney = document.querySelector('.cashout__price') 
const cashoutBtn = document.querySelector('.cashout__btn')

function computerMovements(){
  const randomMove = Math.round(Math.random() * 5) + 1;

  return randomMove;
}

const scoresdata = {
  wins: 0,
  lossess: 0,
  tied: 0
}

let money = 0;

submitBtn.addEventListener('click', ()=>{

 function playerMovement(){
  const playerInputValue = Number(inputBox.value.trim());

  if(inputBox.value >= 1 && inputBox.value <= 6){
    
  const computerActiveMoves = computerMovements();

  compScores.innerHTML = computerActiveMoves;

  if(computerActiveMoves > playerInputValue){
    scoresdata.lossess += 1;
  }
  if(playerInputValue > computerActiveMoves){
    scoresdata.wins += 1
    money += 2.00

    cashoutMoney.innerHTML = `$${money}.00`
  }
  if(playerInputValue === computerActiveMoves){
    scoresdata.tied += 1;
  }

  scoresDisplay.innerHTML = `
    <p>Wins: ${scoresdata.wins}</p>
    <p>Losses: ${scoresdata.lossess}</p>
    <p>Ties: ${scoresdata.tied}</p>
  `

  }else if(inputBox.value > 6 || inputBox.value === NaN){
    setTimeout(()=>{
      errorInfo.style.display = 'block';
    }, 500)

    setTimeout(()=>{
      errorInfo.style.display = 'none';
    }, 3000)
  }
 }
 playerMovement();
})

cashoutBtn.addEventListener('click', ()=>{
  setTimeout(()=>{
    messageBoard.style.display = 'block'
  }, 200)

  setTimeout(()=>{
    messageBoard.style.display = 'none'
  }, 3000)
})