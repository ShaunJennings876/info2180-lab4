

function main (){
  window.onload = function () {
    makeSquares();
    clearSquares();

    let arr = ["","","","","","","","",""];
    let state = "";

    hoverSquares();
    trackGame(arr,state);
    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
    reset();
    state = "";
    for(let i = 0; i < arr.length; i++){
      arr[i] = "";
    }

    });

  }
}

function clearSquares(){
  squares = document.getElementsByClassName("square");
  for(let i = 0; i < squares.length; i++){
    squares[i].innerHTML = "";
    squares[i].className = "square";
  }
}

function makeSquares(){
  let squares = document.getElementById("board").getElementsByTagName('div');
  for(let i = 0; i < squares.length; i++){
    squares[i].classList.add("square");
  }
}

function drawX(sqr){
  sqr.className = "square X";
  sqr.innerHTML = "X";
}

function drawO(sqr){
  sqr.className = "square O";
  sqr.innerHTML = "O";
}

function updateSquares(arr,sqr,state,pos){

  if(state === ""){
    drawX(sqr);
    arr[pos] = "X";
    return "X";
  }
  else if(state === "X" && arr[pos] === ""){
    drawO(sqr);
    arr[pos] = "O";
    return "O";
  }
  else if(state === "O" && arr[pos] === ""){
    drawX(sqr);
    arr[pos] = "X";
    return "X"
  }
  return state;

}

function hoverSquares(){
  squares = document.getElementsByClassName('square');
  for(let i = 0; i < squares.length; i++){
    squares[i].onmouseover = function(){
      this.classList.add("hover");
    }
    squares[i].onmouseout = function(){
      this.classList.remove("hover");
    }
  }
}

function trackGame(arr,state){

  squares = document.getElementsByClassName('square')
  for(let i = 0; i < squares.length; i++){
    squares[i].onclick = function(){
      state = updateSquares(arr,this,state,i);
      return checkWin(arr);
    }
  }


}

function clearStatus(){
  document.getElementById("status").innerHTML = "";
}

function winStatus(winner){

  document.getElementById('status').classList.add("you-won");
  document.getElementById('status').innerHTML = "Congratulations! " + winner + " is the Winner!"
}

function checkWin(arr){

  //Check Horizonals--------------------------------
  if(arr[0] !== "" && (arr[0] === arr[1] && (arr[1] === arr[2]))){
    winStatus(arr[0]);
  }
  if(arr[3] !== "" && (arr[3] === arr[4] && (arr[4] === arr[5]))){
    winStatus(arr[3]);
  }
  if(arr[6] !== "" && (arr[6] === arr[7] && (arr[7] === arr[8]))){
    winStatus(arr[6]);
  }

  //Check Verticals---------------------------------
  if(arr[0] !== "" && (arr[0] === arr[3] && (arr[3] === arr[6]))){
    winStatus(arr[0]);
  }
  if(arr[1] !== "" && (arr[1] === arr[4] && (arr[4] === arr[7]))){
    winStatus(arr[1]);
  }
  if(arr[2] !== "" && (arr[2] === arr[5] && (arr[5] === arr[8]))){
    winStatus(arr[2]);
  }
  //Check Diagaonals--------------------------------
  if(arr[0] !== "" && (arr[0] === arr[4] && (arr[4] === arr[8]))){
    winStatus(arr[0]);
  }
  if(arr[2] !== "" && (arr[2] === arr[4] && (arr[4] === arr[6]))){
    winStatus(arr[2]);
  }

}

function reset(){
  document.getElementById("status").classList.remove("you-won");
  document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
  clearSquares();
}

main ();
