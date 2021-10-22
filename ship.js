function createShip(length) {
    if (length > 4 || length <= 0) {
        console.log("Ship is too long, did not create.")
    }
    else {
        return {
            length: length,
            sunk: false,
            positions: [],
            isSunk() {
                let sunk = true;
                for (let i = 0; i < this.positions.length; i++) {
                    if (this.positions[i] != -1)
                        sunk = false;
                }
                return sunk;
            },
            hit(num) {
                if (this.positions.includes(num)) {
                    let i = this.positions.indexOf(num);
                    this.positions[i] = -1;
                }
            },
            createPositions() {
                for (let i = 0; i < this.length; i++) {
                    this.positions.push(i + 1)
                }
            }
        }
    }
}

module.exports = createShip;