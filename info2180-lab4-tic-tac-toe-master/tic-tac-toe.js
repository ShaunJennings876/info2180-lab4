

function main (){
  window.onload = function () {
    makeSquares();
    /*let squares = document.getElementsByClassName("squares");
    for(let i = 0; i < squares.length; i++){
      squares[i].innerHTML = "";
    }*/
  }
}

function makeSquares(){
  let squares = document.getElementById("board").getElementsByTagName('div');
  for(let i = 0; i < squares.length; i++){
    squares[i].classList.add("square");
  }
}

main ();
