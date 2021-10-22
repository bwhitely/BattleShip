import Ship from './ship'

function createGameBoard() {
    return {
        board: [
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
        ],
        ships: [],
        missedHits: [],
        placeShip(ship, coordsObject) {
            // Add ship to ships array
            this.ships.push(ship)
            // Place ship at desired coords
            this.board[coordsObject.first][coordsObject.second] = ship;
        },
        receiveAttack(coordsObject) {
            // Check if desired coords contains a ship
            if (this.board[coordsObject.first][coordsObject.second] instanceof Ship) {
                let ship = this.board[coordsObject.first][coordsObject.second]
                ship.hit(1)
            }
            // No ship
            else {
                this.board[coordsObject.first][coordsObject.second] = -1;
                this.missedHits.push(coordsObject)
            }
        },
        allShipsSunk() {
            this.ships.array.forEach(element => {
                if (!element.isSunk()) {
                    return false;
                }
            });
        }
    }
}

module.exports = createGameBoard