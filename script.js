function print(a){
    for(var i = 0; i < 3; i++) {
      console.log(a[i], ',');
    }
  }
  
  
  function getRandomInt() {
    return Math.floor(Math.random() * 2);
  }
  
  function GameBoard() {
    let gameBoard = new Array();
    const rows = 3;
    for (let i = 0; i < rows; i++)
      gameBoard[i] = new Array(1, 1, 1);
  
    const Round = function Round(marker, line, column) {
      gameBoard[line][column] = marker;
      print(gameBoard);
    }
    const getGameBoard = function getGameBoard(){
      return gameBoard;
    }
    const Full = function Full() {
      let f = 0;
      for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
          if(gameBoard[i][j]!=1){
            f++;
          }
        }
      }
      if(f===9){
        return true;
      } else {
        return false;
      }
    }
  
    const Display = function Display(gameBoard) {
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(gameBoard[i][j]!=1) {
            const grid = document.getElementById(`${i}${j}`);
            grid.textContent = gameBoard[i][j];
          }
        }
      }
    }
  
    const Mark = function Mark(marker){
      const square = document.querySelectorAll('a');
      for(let i=0; i<square.length;i++){
        square[i].addEventListener('click', () => {
          square[i].textContent = marker;
          line = i
        })
      }
    }
  
    return {gameBoard, getGameBoard, Round, Full, Display, Mark} ;
  }
  
  function Person (thisname, thismarker) {
    const name = thisname;
    const marker = thismarker;
  
    const getMarker = function getMarker() {
      return marker;
    }
    const getName = function getName() {
      return name;
    }
    const getPosition = function getPosition() {
      return {line, column};
    }
  
    const Play = function Play(gameBoard){
  
    }
    return {name, marker, getMarker, getName, getPosition, Play};
  }
  
  function Game(P1, P2, Gameboard) {
    let List;
    let i = 0;
    if(getRandomInt()===1) {
      List = [P1, P2];
    } else {
      List = [P2, P1];
    };
    while(Win(Gameboard.getGameBoard())===false || Gameboard.Full()===false) {
      if (i === 0) {i++;} else {i = 0;}
      const marker = List[i].marker;
      const {line, column} = List[i].Play(Gameboard.getGameBoard());
      Gameboard.Round(marker, line, column);
      Gameboard.Display(Gameboard.getGameBoard());
      if (Win(Gameboard.getGameBoard())===false && Gameboard.Full()===true) {
      console.log("Tie!");
      } if (Win(Gameboard.getGameBoard())){
        console.log('Game Over');
        break;}
    }
  }
  
  function Win(gameBoard) {
    for(let i=0; i<3; i++) {
      while(((gameBoard[i][0]===gameBoard[i][1] && gameBoard[i][1]===gameBoard[i][2]) || (
        gameBoard[0][i]===gameBoard[1][i] && gameBoard[1][i]===gameBoard[2][i])) && (
          gameBoard[i][1]!=1) && (gameBoard[1][i]!=1)){
        return true;
      }
    }return false;
  }
  
  let P1 = Person('Gabriel', 'X');
  let P2 = Person('Rabin', 'O');
  let Gameboard = GameBoard();
  Game(P1, P2, Gameboard);
  