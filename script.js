const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    const storeUserSelect = [];

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');
    const markContainer = document.querySelector('.marks');

    // bindEvents
    markContainer.addEventListener('click', pickUserMark.bind(this));
    getBoardContainer.addEventListener('click', displayMark.bind(this));

    const _pickUserMark = e => {
        if (e.target.closest('button')) {
            gameBoardObject.storeUserSelect.push(e.target.textContent.toLowerCase());
        }
    }

    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const el = gameBoardObject.gameBoardArr.some(item => {
                if (item === gameBoardObject.storeUserSelect[0]) {
                    gameBoardObject.render(item);
                    // e.target.textContent = item;
                }
            });
        }
    }

    const render = e => {
        squares.forEach(element => {
            element.textContent = e;
        });
    }






    // cache DOM

    //     const getMarkSelect = document.querySelector('.marks');
    //     const getSquares = document.querySelector('.game-board');
    //     let storeUserSelect;

    //     const isPlayerChoice = (suppliedPlayerLetter) => {
    //         getMarkSelect.addEventListener('click', e => {
    //             if (e.target !== e.currentTarget) {
    //                 if (e.target.textContent.toLowerCase() === suppliedPlayerLetter) {
    //                     storeUserSelect = e.target.textContent.toLowerCase();
    //                     cacheBoardDOM();
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const squares = e => {
    //         const el = gameBoardArr.some(item => {
    //             if (e.target !== e.currentTarget && e.target.textContent === '') {
    //                 // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
    //                 if (item === storeUserSelect) {
    //                     return e.target.textContent = item;
    //                     // nextBoard(item);
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const cacheBoardDOM = () => {
    //         getSquares.addEventListener('click', squares);
    //     };

    //     const nextSquares = e => {
    //         const nextEl = gameBoardArr.some(item => {
    //             if (e.target !== e.currentTarget && e.target.textContent === '') {
    //                 cacheBoardDOM(item);
    //             }
    //             else if (e.target !== e.currentTarget) {
    //                 if (!(item === storeUserSelect)) {
    //                     return e.target.textContent = item;
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const nextBoard = () => {
    //         if (storeUserSelect) {
    //             gameBoardArr.some(item => {

    //             })
    //         }
    //         getSquares.addEventListener('click', nextSquares);
    //     }

    //     return { isPlayerChoice };
    // })();

    return {
        displayMark
    }
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

// displayController.players();
