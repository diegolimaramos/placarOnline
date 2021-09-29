let countPlayer1 = 1;
let countPlayer2 = 1;

document.querySelector('#btnWinnerPlayer1').addEventListener('click', victoryP1);
document.querySelector('#btnWinnerPlayer2').addEventListener('click', victoryP2);

function victoryP1(){
    let scorePlayer1 = document.querySelector('#scorePlayer1');
    scorePlayer1.innerHTML = '';

    return scorePlayer1.innerHTML += countPlayer1++;
}

function victoryP2(){
    let scorePlayer2 = document.querySelector('#scorePlayer2');
    scorePlayer2.innerHTML = '';

    return scorePlayer2.innerHTML += countPlayer2++;
}

function reset(){
    countPlayer1 = 1;
    countPlayer2 = 1;
    scorePlayer1.innerHTML = 0;
    scorePlayer2.innerHTML = 0;
}
