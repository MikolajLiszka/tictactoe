
const empty = [null, null, null, null, null, null, null, null, null];
const x = "X";
const o = "O";

let currentPlayer = o;



var eachBox = document.getElementsByClassName('box');

eachBox.onclick = function() {
    this.style.backgroundColor = 'red';
}