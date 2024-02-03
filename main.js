let board =[
    ['','',''],
    ['','',''],
    ['','','']
];


let currentPLayer = "X";

function makeMove(row, col){
    if(board[row][col] === ''){
        board[row][col] = currentPLayer;

        displayBoard();


        if(checkWin(currentPLayer)){
            alert (`Le joueur ${currentPLayer} a gagné !`)
            resetGame();
            return;
        }

        if(checkDraw()){
            alert ('Match nul');
            resetGame();
            return;
        }

        if( currentPLayer === 'X') {
            currentPLayer = 'O';
        } else {
            currentPLayer ='X';
        }
    }
}


function checkWin(player){

    for ( let row = 0; row < 3; row ++){
        if (board[row][0] === player && board[row][1] === player && board[row][2] === player){
            return true;
        }
    }

    for ( let col = 0; col < 3; col ++){
        if (board[0][col] === player && board[1][col] === player && board[2][col] === player){
            return true;
        }
    }

    if(board[0][0] === player && board[1][1] === player && board[2][2] === player){
        return true
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player){
        return true;
    }
    return false;
}


function checkDraw(){
    for (let row = 0; row < 3; row +=1){
        for(let col = 0; col < 3; col +=1){
            if (board[row][col] === ''){
                return false
            }
        }
    }
    return true;
}


function displayBoard(){
    const booardContainer = document.querySelector('.board');

    booardContainer.innerHTML = '';
        for (let row = 0; row < 3; row +=1){
            for(let col = 0; col < 3; col +=1){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = board[row][col];

                cell.addEventListener('click', () =>{
                    makeMove(row, col);
                })


                booardContainer.appendChild(cell);
                
            }
        

        }
}

function resetGame(){
    board =[
        ['','',''],
        ['','',''],
        ['','','']
    ];

    currentPLayer = 'X';
    displayBoard();
}

displayBoard();


