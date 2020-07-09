// intialize global variables
//  set up game board 3 x 3
const gameBoard = new Array ("white", "white", "white", "white", "white", "white", "white", "white", "white");
let currentPlayer = "red";
let selectedSquare = null;
let gameOver = null;
let counter = 0;
const messageFoot = document.querySelector("#message-footer");
messageFoot.innerHTML= `We are waiting for ${currentPlayer} to take their turn`;

console.log(gameBoard);
console.log(currentPlayer);


// set up <buttons> for each square (indexd 0-8, 9 total squares)
let button0 = document.querySelector('#Square0');
// button0.innerHTML = `This be 0`;
let button1 = document.querySelector('#Square1');
let button2 = document.querySelector('#Square2');
let button3 = document.querySelector('#Square3');
let button4 = document.querySelector('#Square4');
let button5 = document.querySelector('#Square5');
let button6 = document.querySelector('#Square6');
let button7 = document.querySelector('#Square7');
let button8 = document.querySelector('#Square8');

// lool at passing in and use 'e' more
let getSquare = (e) => {    
    let selectedSquare = e.target.value;
    console.log("selectedSquare " + selectedSquare)
    console.log("e.target.value " + e.target.value);
    console.log("gameBoard[selectedSquare] " + gameBoard[selectedSquare]);
    if (gameBoard[selectedSquare] === "white"){
        gameBoard[selectedSquare] = currentPlayer;
        console.log("gameBoard " + selectedSquare + " is now " + gameBoard[selectedSquare]);
        console.log("currentPlayer " + currentPlayer);
        changeSquare(selectedSquare);
        winLogic();
        nextPlayer();
    }else {
        messageFoot.innerHTML = `Player ${currentPlayer}, square ${e.target.value} is already taken!"`
        console.log("Square " + e.target.value + " is already taken!"); 
    };
    console.log(gameBoard);
}
let nextPlayer = () => {
    if (currentPlayer === "red") {
        currentPlayer = "blue";
        console.log(`It is blue's ${currentPlayer} turn`);
    }else if (currentPlayer === "blue") {
        currentPlayer = "red";
        console.log(`It is red's ${currentPlayer} turn`);
    };
};
let changeSquare = (btn) => {
    if (currentPlayer === "red") {
        console.log("in changeSquare IF");
        let change = `button${btn}`;
        // `button${btn}`.value = `X`;
        `button${btn}`.innerHTML = `X`
        // button0.value = "X";
        console.log(change);

    }else if (currentPlayer === "blue") {
        console.log("in changeSquare ELSE IF");

    };
};
console.log(document.querySelector('#Square0').value);
let squares = document.querySelectorAll('.squares');
console.log("squares " + squares);


squares.forEach (cell => {
    cell.addEventListener('click', getSquare);
    // let selectedSquare = cell;
    // console.log(selectedSquare);
});
console.log(gameBoard);
const gameReset = document.querySelector('#reset');
gameReset.addEventListener('click', resetGame);

function resetGame () {
    console.log("resetting game");
    gameBoard.forEach (cell => {
        console.log(cell);
        cell = "white";
        console.log(cell);
    });
    console.log(gameBoard);
}

// function winLogic - from review/walk through by Marc with class
function winLogic() {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== "white") {
      messageFoot.innerHTML = `${currentPlayer} is the winner on row 1!`;
    //   removeEvents();
    } else if (
      gameBoard[3] === gameBoard[4] &&
      gameBoard[4] === gameBoard[5] &&
      gameBoard[3] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner on row 2!`;
    //   removeEvents();
    } else if (
      gameBoard[6] === gameBoard[7] &&
      gameBoard[7] === gameBoard[8] &&
      gameBoard[6] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner on row 3!`;
    //   removeEvents();
    } else if (
      gameBoard[0] === gameBoard[3] &&
      gameBoard[3] === gameBoard[6] &&
      gameBoard[0] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner in column 1!`;
    //   removeEvents();
    } else if (
      gameBoard[1] === gameBoard[4] &&
      gameBoard[4] === gameBoard[7] &&
      gameBoard[1] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner in column 2!`;
    //   removeEvents();
    } else if (
      gameBoard[2] === gameBoard[5] &&
      gameBoard[5] === gameBoard[8] &&
      gameBoard[2] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner in column 3!`;
    //   removeEvents();
    } else if (
      gameBoard[0] === gameBoard[4] &&
      gameBoard[4] === gameBoard[8] &&
      gameBoard[0] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner on a diagonal`;
    //   removeEvents();
    } else if (
      gameBoard[2] === gameBoard[4] &&
      gameBoard[4] === gameBoard[6] &&
      gameBoard[2] !== "white"
    ) {
      messageFoot.innerHTML = `${currentPlayer} is the winner on a diagonal`;
    //   removeEvents();
    } else if (counter === 9) {
      messageDiv.innerHTML = "No winner";
    //   removeEvents();
    } else {
      messageFoot.innerHTML = "No winner yet";
    }
  }






// function for user to select a square


// set event listeners
// button0.addEventListener('click', getSquare);