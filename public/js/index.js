const squares = document.querySelectorAll(".square");
let spaces = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let x = 1,
    o = 2,
    space = 0;

let turn = true;

turn ? document.querySelector('h1').innerHTML='X\'s turn!' : document.querySelector('h1').innerHTML='O\'s turn!';


squares.forEach(square => {
    square.addEventListener('click', () => {
        if(document.querySelector('h1').innerHTML !== 'X wins!' && document.querySelector('h1').innerHTML !== 'O wins!'){
            if (square.innerHTML === '') {
                if (turn) {
                    document.querySelector('h1').innerHTML='O\'s turn!'
                    square.innerHTML = 'x';
                    spaces[square.id[0]][square.id[1]] = 1
                    turn = !turn;
                } else {
                    document.querySelector('h1').innerHTML='X\'s turn!'
                    square.innerHTML = 'o';
                    spaces[square.id[0]][square.id[1]] = 2
                    turn = !turn;
                }
            }
            for (let i = 0; i < spaces.length; i++) {
                for (let j = 0; j < spaces.length; j++) {
                    //Horizontal
                    if (spaces[i][j] === 1 && spaces[i][j + 1] === 1 && spaces[i][j + 2] === 1) document.querySelector('h1').innerHTML = 'X wins!'
                    else if (spaces[i][j] === 2 && spaces[i][j + 1] === 2 && spaces[i][j + 2] === 2) document.querySelector('h1').innerHTML = 'O wins!'
                    //Diagonal down
                    if (spaces[i][j] === 1 && spaces[i+1][j + 1] === 1 && spaces[i+2][j + 2] === 1) document.querySelector('h1').innerHTML = 'X wins!'
                    else if (spaces[i][j] === 2 && spaces[i+1][j + 1] === 2 && spaces[i+2][j + 2] === 2) document.querySelector('h1').innerHTML = 'O wins!'
                    //Diagonal up
                    if (spaces[i+2][j] === 1 && spaces[i+1][j+1] === 1 && spaces[i][j + 2] === 1) document.querySelector('h1').innerHTML = 'X wins!'
                    else if (spaces[i+2][j] === 2 && spaces[i+1][j+1] === 2 && spaces[i][j + 2] === 2) document.querySelector('h1').innerHTML = 'X wins!'
                }
                //Vertical
                if (spaces[i][i] === 1 && spaces[i+1][i] === 1 && spaces[i+2][i] === 1) document.querySelector('h1').innerHTML = 'X wins!'
                else if (spaces[i][i] === 2 && spaces[i+1][i] === 2 && spaces[i+2][i] === 2) document.querySelector('h1').innerHTML = 'O wins!'
            }
        }
        
    })
})