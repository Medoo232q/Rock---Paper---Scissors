// alert("It's my simple game and it ends when you score 10 points, but the counting doesn't stop, so if you want to start over, refresh the page.")
const choices=['rock','paper','scissors','paper','rock','rock']
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const playerScoreDisplay=document.getElementById("playerScoreDisplay")
const computerScoreDisplay=document.getElementById("computerScoreDisplay")
let  playerScore=0
let   computerScore=0
function playGame(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()* 6)]
    console.log(computerChoice)
    let result=""
    if(playerChoice===computerChoice){
        result="DRAW"
        
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissors")? "You Win!":"You Lose!";
                break;
            case "paper":
                result=(computerChoice==="rock")? "You Win!":"You Lose!";
                break;
            case "scissors":
                result=(computerChoice==="paper")? "You Win!":"You Lose!";
                break;
            
        }
    }
    playerDisplay.textContent=`PLAYER: ${ playerChoice}`
    computerDisplay.textContent=`COMPUTER: ${ computerChoice}`
    resultDisplay.textContent=result
    switch(result){
        case "You Win!":
            resultDisplay.className='greenColor'
            playerScore++;
            playerScoreDisplay.textContent=playerScore
            break;
        case "You Lose!":
            resultDisplay.className='redColor'
            computerScore++;
            computerScoreDisplay.textContent=computerScore
            break;
        case "DRAW":
            resultDisplay.className='blueColor'
            computerScore++;
            computerScoreDisplay.textContent=computerScore
            playerScore++;
            playerScoreDisplay.textContent=playerScore
            break;
    }
    let note=document.getElementById("note")
    if(computerScore==5){
        note.textContent="Note: The computer chooses its turn randomly, and I have no involvement in your permanent loss, loser"
    }else if(computerScore==10){
        note.textContent="You lose!/ Game Over"
    }else if (playerScore==10){
        note.textContent="Congratulations; You Win"
    }
}
