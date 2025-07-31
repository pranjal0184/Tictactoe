let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;

function checkwin() {
    if (
        (arr[0] && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] && arr[2] == arr[4] && arr[4] == arr[6]) ||
        (arr[0] && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] && arr[2] == arr[5] && arr[5] == arr[8])
    ) {
        gameOver = true;
        setTimeout(() => {
            alert(`Winner is ${currentPlayer}`);
            resetGame();
        }, 200);
        return;
    }

    if (!arr.includes(null)) {
        gameOver = true;
        setTimeout(() => {
            alert("Draw!");
            resetGame();
        }, 200);  
    }
}

function handleClick(el) {
    if (gameOver) return;

    const id = Number(el.id);
    if (arr[id] !== null) return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    checkwin();
    if(!gameOver){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function resetGame(){
    arr = Array(9).fill(null);
    currentPlayer = "X";
    gameOver = false;
    const boxes = document.querySelectorAll(".col");
    boxes.forEach(box => box.innerText = "");
}