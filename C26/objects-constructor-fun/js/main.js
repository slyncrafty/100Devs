//Create a constructor with 4 properties and 3 methods
function MakePizza(pizzaBrand, pizzaName, pizzaToppings, pizzaCheese){
    this.brand = pizzaBrand;
    this.name = pizzaName;
    this.toppings = pizzaToppings;
    this.cheese = pizzaCheese;
    
    this.numToppings = function (){
        return this.toppings.length;
    }
    this.applyCoupons = function(coupon) {
        console.log(`You've got ${coupon} DISCOUNT!!!`);
    }
    this.deliveryTime = function(time) {
        console.log(`Your pizza will arrive in ${time}`);
    }
}

let dominoPepperoni = new MakePizza('dominos', 'Pepperoni', ['Pepperoni'], true);
let pizzaHutDoubleDecker = new MakePizza('pizza hut', 'Double Decker', ['pepproni', 'onion', 'yellow peppers'], true);
let randomPizza = new MakePizza('random', 'Hawaiian', ['pineapple', 'ham'], false);
