'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let gameon=true;
let newScore=0;
let currentScore=0;
let activePlayer=0

//Reset function
let reset=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    currentScore=0;
    activePlayer==0 ? activePlayer=1 : activePlayer=0;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
}
//check result
let result=function(){
    if (Math.trunc(document.getElementById(`score--${activePlayer}`).textContent)+currentScore>=20)
    {
        gameon=false;
        diceEl.classList.add('hidden');
        document.getElementById(`score--${activePlayer}`).textContent=Math.trunc(document.getElementById(`score--${activePlayer}`).textContent)+currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    }
}
function init(){
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active")
    diceEl.classList.remove("hidden")
    activePlayer=0;
    currentScore=0;
    newScore=0;
    gameon=true;
    score0El.textContent=0;
    score1El.textContent=0;
    current0El=0;
    current1El=0;
    currentScore=0;
    activePlayer=0;
    }
init();
//buttonroll
if (gameon==true)
{
btnRoll.addEventListener("click",()=>{
    if (gameon==true)
    {
    const dice=Math.trunc(((Math.random())*6)+1)
    diceEl.src=`dice-${dice}.png`;
    if(dice!=1)
        {
            
            currentScore=currentScore+dice;
            result();
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
    else
        {
            reset();
        }
    }
})
btnHold.addEventListener("click",()=>{
    if (gameon==true)
    {
    document.getElementById(`score--${activePlayer}`).textContent=Math.trunc(document.getElementById(`score--${activePlayer}`).textContent)+currentScore;
    reset();
    }
})
}
btnNew.addEventListener("click",init);