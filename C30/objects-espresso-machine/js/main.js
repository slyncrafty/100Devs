//Create an espresso machine class that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(color, make, price, coffeeType){
        this.color = color;
        this.make = make;
        this.price = price;
        this.coffeeType = coffeeType;
    }

    get getPrice(){
        return this.price;
    }

    makeCoffee() {
        console.log(`${this.color} machine says, Hi- Here is your coffee`);
    }

    clean() {
        console.log(`${this.color} machine is cleaning up`);
    }
}

const colors = ['blue', 'green', 'yellow', 'red'];
const makes =['light', 'medium', 'dark'];
const prices = ['$10', '$15', '$9', '$20'];
const coffeeTypes = [1, 2 ,3, 4]

blueLight = new EspressoMachine(colors[0], makes[0], prices[0], coffeeTypes[0])
greenLight = new EspressoMachine(colors[1], makes[0], prices[1], coffeeTypes[1])
darkRed = new EspressoMachine(colors[3], makes[2], prices[2], coffeeTypes[2])
