//Create an a class and extend it - Can be anything you would like it to be! 

class Transportation {
    constructor(name, destination, fare) {
        this._name = name;
        this.destination = destination;
        this.fare = fare;
    }
    
    get name() {
        return this._name;
    }

    sound() {
        console.log(`${this.name} makes a sound`)
    }

}

class Train extends Transportation {
    constructor(name, destination, fare, lineNumber) {
        super(name, destination, fare);
        this._lineNumber = lineNumber;
    }

    get lineNumber() {
        return this._lineNumber;
    }

    sound() {
        super.sound()
        console.log(`ChuChu--`);
    }
}

let eLine = new Train(`Railway Highspeed`, `KGX`, `3.00`, 5);
eLine.sound();

class Bus extends Transportation {
    constructor(name, destination, fare, busNumber) {
        super(name, destination, fare);
        this.busNumber = busNumber;
    }
}

let bus322 = new Train(`Bus #322`, `Terminal`, `1.25`, 322);
bus322.sound();
bus322.name;