const createShip = require('../ship');
const ship = require('../ship');

test('test', () => {
    expect(1 + 2).toBe(3);
})

test('Invalid Ship object tests.', () => {
    expect(createShip(-1)).toBe(null || undefined)
    expect(createShip(5)).toBe(null || undefined)
    expect(createShip(0)).toBe(null || undefined)
})

test('Valid Ship object tests.', () => {
    expect(createShip(1).length).toBe(1)
    expect(createShip(2).length).toBe(2)
    expect(createShip(3).length).toBe(3)
    expect(createShip(4).length).toBe(4)
})

test('Test Ship position creation.', () => {
    let ship = createShip(4);
    let ship2 = createShip(1)
    ship2.createPositions()
    ship.createPositions();
    let arr = [1, 2, 3, 4]
    let arr2 = [1]
    expect(ship.positions).toStrictEqual(arr)
    expect(ship2.positions).toStrictEqual(arr2)
})

test('Test Ship object being hit', () => {
    let ship = createShip(4);
    ship.createPositions()
    ship.hit(2)
    let arr = [1, -1, 3, 4]
    expect(ship.positions).toStrictEqual(arr)
})