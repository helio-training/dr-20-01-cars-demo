const { Truck, Car } = require('./Vehicle')

const cars = [
    new Truck('<h1>White Knight</h1>', 'Toyota', 'Tacoma', 2010, true),
    new Car('Grey Car', 'Ford', 'SE', 2014, false),
    new Car('Frank', 'Volvo', 'S40', 2003, true),
    new Car('Old Yeller', 'Honda', 'Accord', 2002, true),
    new Car('Rocky 4', 'Toyota', 'Camry', 2006, false),
    new Car('Ramsese', 'VW', 'Jetta', 2013, false)
]

const countOfToyotas = cars.reduce((count, car) => {
    return count + (car.make === 'Toyota' && car.year > 2000 ? 1 : 0)
}, 0)

console.log('count', countOfToyotas)

const firstVehicleBuiltBefore2010 = cars.reduce((foundCar, car) => {
    return !foundCar && car.year < 2010 ? car : foundCar
}, null)

console.log('first', firstVehicleBuiltBefore2010)

module.exports = {
    vehicles: cars
}