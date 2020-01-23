let positionsNodeList = document.querySelectorAll('.box');
let positions = Array.from(positionsNodeList);

let player = 0;

let xClicked = [];
let oClicked = [];

let winningArrays = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];


positions.forEach(function(position) {
  position.addEventListener('click', function(event){
    if (positions === 0) {
      position.innerHTML=' ';
    }
    else if (player === 0) {
      xClicked.push(positions.indexOf(position));
      position.innerHTML='X';
      player ++;
      checkWin(xClicked, 'X');
    } else if (player === 1) {
      oClicked.push(positions.indexOf(position));
      position.innerHTML='O';
      checkWin(oClicked, 'O')
      player --;
    }
    this.removeEventListener('click',arguments.callee,false)
  })
})



function checkWin(playerClickedArr, player) {

  let winningArr = [];
  let winner = document.querySelector('.winner')

  winningArrays.forEach(function(array) {

    if (playerClickedArr.includes(array[0]) && playerClickedArr.includes(array[1]) && playerClickedArr.includes(array[2])) {
      winningArr.push(array[0] , array[1] , array [2]);
      winner.innerHTML=`${player} Wins!`;
      winner.style.display = 'inherit';

      winningArr.forEach(function(num) {
        document.getElementById(`box${num}`).classList.add('highlight');
      })

      positions = 0;

    } else if (xClicked.length === 5 && winningArr.length === 0) {
      winner.innerHTML=`It's a draw!`;
      winner.style.display = 'inherit';
    }
  });
}
