
let boxes = document.querySelectorAll('.box');
boxes = Array.from(boxes);
console.log(boxes);

playerX = "X";
playerO = "O";
let currentPlayer = playerX;


boxes.forEach(function(box){
    box.addEventListener('click', function(){
        
        if (currentPlayer == playerX)
        {
            box.innerText = playerX;
            currentPlayer = playerO;
        }
        else
        {
            box.innerText = playerO;
            currentPlayer = playerX;
        }
    })
})
