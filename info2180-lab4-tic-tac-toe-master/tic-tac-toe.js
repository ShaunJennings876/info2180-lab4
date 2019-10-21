

function main (){
  window.onload = function () {
    makeSquares();
    clearSquares();

    const arr = ["","","","","","","","",""];
    let state = "";

    trackGame(arr,state);
    /*squares = document.getElementsByClassName('square')
    for(let i = 0; i < squares.length; i++){
      squares[i].onclick = function(){
        state = updateSquares(arr,this,state,i);
      }
    }*/

  }
}

function clearSquares(){
  squares = document.getElementsByClassName("squares");
  for(let i = 0; i < squares.length; i++){
    squares[i].innerHTML = "";
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

function trackGame(arr,state){

  squares = document.getElementsByClassName('square')
  for(let i = 0; i < squares.length; i++){
    squares[i].onclick = function(){
      state = updateSquares(arr,this,state,i);
    }
  }

}

main ();
