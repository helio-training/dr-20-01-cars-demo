class Vehicle {
    constructor(name, make, model, year) {
        this.name = name
        this.make = make
        this.model = model
        this.year = year
    }
}

class Car extends Vehicle {
    constructor(name, make, model, year, isTreatedLikeSportsCar) {
        super(name, make, model, year)
        this.isTreatedLikeSportsCar = isTreatedLikeSportsCar
    }
}

class Truck extends Vehicle {
    constructor(name, make, model, year, is4x4) {
        super(name, make, model, year)
        if (is4x4 === undefined) {
            throw new Error('Did not define is4x4')
        }
        this.is4x4 = is4x4
    }
}

module.exports = {
    Truck,
    Car
}