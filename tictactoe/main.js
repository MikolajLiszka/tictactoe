
let boxes = document.querySelectorAll('.box');
boxes = Array.from(boxes);
console.log(boxes);

playerX = "X";
playerO = "O";
let currentPlayer = playerX;

let winningConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function won(){
    winningConditions.forEach(function(condition){
    let check = condition.every(id => boxes[id].innerText == currentPlayer);
    if (check == true)
    {
        alert("You won")
    }
})
}


boxes.forEach(function(box){
    box.addEventListener('click', function(){
        if(box.innerText != "") return;
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

