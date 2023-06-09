let currentPlayer = 'x';
let gameEnded = false;
let gameMoves = ['','','','','','','','',''];

document.addEventListerner('DOMContentLoaded',() =>{
    const boxes = document.querySelectorAll('td');
    const table = document.querySelector('table');
    const gameScore = document.querySelector('#game-score');
    let player = document.querySelector('#player');
    let text = document.querySelector('#text');

    boxes.forEach(box,index) 
        box.addEventListerner('click' , ()=> {
        if(!gameEnded && gameMoves[index] ===''){
            gameMoves[index] = currentPlayer;
            box.textContent = currentPlayer;
            if(gameWin()){
                table.style.display = 'none';
                gameScore
            }
        }
     })
    
})