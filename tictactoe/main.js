
let boxes = document.querySelectorAll('.box');
boxes = Array.from(boxes);
console.log(boxes);

playerX = "X";
playerO = "O";
let currentPlayer = playerX;

let winningConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

/*function youWon(){

    let won = false;

    for (i = 0; i < 3; i++)
    {
        if (boxes[i,0] != box.innerText == null &&  boxes[i,0] == boxes[i,1] && boxes[i,1] == boxes[i,2])
        {
            winner == true;
            alert('You won');
        }
    }

    for (i = 0; i < 3; i++)
    {
        if (boxes[0,i] != box.innerText == null &&  board[0,i] == board[1,i] && board[1,i] == board[2,i])
        {
            won == true;
            alert('You won');
        }
    }

    if (board[0,2] != null &&  board[0,2] == board[1,1] && board[1,1] == board[2,0])
    {
        won == true;
            alert('You won');
    }

    if (board[0,0] != null &&  board[0,0] == board[1,1] && board[1,1] == board[2,2])
    {
        won == true;
        alert('You won');
    }
}


function won(){
    winningConditions.forEach(function(condition){
    let check = condition.every
})
}

*/

function won(){
    winningConditions.forEach(function(condition){
    let check = condition.every(idx => boxes[idx].innerText.trim() == currentPlayer);
    if (check == true)
    {
        alert("You won")
    }
})
}


boxes.forEach(function(box){
    box.addEventListener('click', function(){
        if (currentPlayer == playerX)
        {
            box.innerText = playerX;
            won();
            currentPlayer = playerO;
        }
        else
        {
            box.innerText = playerO;
            won();
            currentPlayer = playerX;
        }
        
    })
})

