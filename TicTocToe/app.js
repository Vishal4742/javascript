let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
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
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {
            box.innerHTML = turnO ? 'O' : 'X';
            turnO = !turnO;
            checkWinner();
        }
    });
});