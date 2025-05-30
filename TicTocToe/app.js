let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset'); // Fixed selector to match index.html
let turnO = true;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function resetGame() {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.pointerEvents = 'auto'; // Enable clicking again
    });
    turnO = true;
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {
            box.innerHTML = turnO ? 'O' : 'X';
            turnO = !turnO;
            checkWinner();
        }
    });
});

reset.addEventListener('click', resetGame);

function checkWinner() {
    let winner = null;
    winningCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (
            boxes[a].innerHTML &&
            boxes[a].innerHTML === boxes[b].innerHTML &&
            boxes[a].innerHTML === boxes[c].innerHTML
        ) {
            winner = boxes[a].innerHTML;
        }
    });
    if (winner) {
        // Disable further moves after win
        boxes.forEach(box => box.style.pointerEvents = 'none');
        setTimeout(() => {
            alert(`${winner} wins!`);
            resetGame();
        }, 100);
    } else if ([...boxes].every(box => box.innerHTML !== '')) {
        setTimeout(() => {
            alert('It\'s a draw!');
            resetGame();
        }, 100);
    }
}
