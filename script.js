const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];

    // cache DOM
    const getMarkSelect = document.querySelector('.marks');
    const getSquares = document.querySelector('.game-board');
    let storeUserSelect;

    const isPlayerChoice = (suppliedPlayerLetter) => {
        getMarkSelect.addEventListener('click', e => {
            if (e.target !== e.currentTarget) {
                if (e.target.textContent.toLowerCase() === suppliedPlayerLetter) {
                    storeUserSelect = e.target.textContent.toLowerCase();
                    cacheBoardDOM(suppliedPlayerLetter);
                }
            } e.stopPropagation();
        });
    }

    const squares = e => {
        const el = gameBoardArr.some(item => {
            if (e.target !== e.currentTarget && e.target.textContent === '') {
                // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
                if (item !== storeUserSelect) {
                    nextBoard(item);
                } else {
                    return e.target.textContent = item;
                }
            } e.stopPropagation();
        });
    }

    const cacheBoardDOM = (playerLetter) => {
        getSquares.addEventListener('click', squares);
    };

    const nextSquares = e => {
        const nextEl = gameBoardArr.some(item => {
            if (e.target !== e.currentTarget && e.target.textContent === '') {
                cacheBoardDOM(item);
            }
            else if (e.target !== e.currentTarget) {
                if (!(item === storeUserSelect)) {
                    return e.target.textContent = item;
                }
            } e.stopPropagation();
        });
    }

    const nextBoard = (playerLetter) => {
        getSquares.addEventListener('click', nextSquares);
    }

    return { isPlayerChoice };
})();

const displayController = (() => {
    const players = () => {
        gameBoard.isPlayerChoice(emma.playerMark);
        gameBoard.isPlayerChoice(nev.playerMark);
    };

    return {
        players
    };
})();


displayController.players();
