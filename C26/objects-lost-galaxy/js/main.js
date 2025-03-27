//Create a dog object that has four properties and three methods
let pizza = {};

pizza.size = 'large'
pizza.toppings = ['pepperoni', 'jalapenos', 'onion', 'mushroom'];
pizza.crust = 'stuffed';
pizza.sauce = 'extra';

pizza.estimiatedDeliveryTime = function() {
    console.log('Calculating...');
}

pizza.temperature = function () {
    console.log('Hot');
}

pizza.frisbee = function () {
    console.log('Yeeee');
}