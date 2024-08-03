let randomNum=parseInt(Math.random()*100+1)
// console.log(randomNum);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
let remaining=document.querySelector('.lastResult')
let guessSlot=document.querySelector('.guesses')
let lowOrHi=document.querySelector('.lowOrHi')
let startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){ // whether allowed to play or not
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })

}

function validateGuess(guess){     // right input of guess or not  
    if(isNaN(guess) || guess<1 || guess>100){
        alert('Please enter a valid number')
    }
    else {
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMsg(`Game Over. Random Number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMsg('You Guessed Right')
        endGame()
    }
    else if(guess<randomNum){
        displayMsg('Number is too Low')
    }
    else if(guess>randomNum){
        displayMsg('Number is too High')
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}


function displayMsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h1 id="newGame">Start new Game</h2>';
    startOver.appendChild(p)
    playGame=false
    newGame();

}

function newGame() {
    const newGamebtn=document.querySelector('#newGame')
    newGamebtn.addEventListener('click',function(e){
        randomNum=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
