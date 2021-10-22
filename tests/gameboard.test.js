const createGameBoard = require('../gameboard');
const createShip = require('../ship')

test('GameBoard creation test', () => {
    let board = createGameBoard()
    let boardToTestAgainst = [
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10]
    ]
    expect(board.board).toStrictEqual(boardToTestAgainst)
})

test('GameBoard ship placement test', () => {
    let board = createGameBoard()
    let arr = [];
    let ship = createShip(1)
    arr.push(ship)
    board.placeShip(ship, { first: 5, second: 5 })

    expect(board.ships).toStrictEqual(arr)
    expect(board.board[5][5]).toStrictEqual(ship)
})

test('GameBoard receive attack test', () => {
    let board = createGameBoard()
    board.receiveAttack({ first: 2, second: 2 })
    let missed = [{ first: 2, second: 2 }]

    expect(board.missedHits).toStrictEqual(missed)
    expect(board.board[2][2]).toStrictEqual(-1)

    let ship = createShip(1);
    board.placeShip(ship, { first: 7, second: 7 })

    expect(board.allShipsSunk()).toBe(false)
    board.receiveAttack({ first: 7, second: 7 })
})