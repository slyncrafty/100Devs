//Create a mouse object that has four properties and three methods
let mouse = {};
mouse.color = "black";
mouse.name = "mickey";
mouse.length = 5;
mouse.legs = 4;
mouse.getLength = function() { return this.length; }
mouse.getNumLegs = function() { return this.legs;}
mouse.getName = function() { return this.name;}
mouse.getColor = function() { return this.color;}

// constructor
function MakeMouse(color, name, length, legs) {
    this.color = color;
    this.name = name;
    this.length = length;
    this.legs = legs;
    this.getLength = function() { return this.length; }
    this.getNumLegs = function() { return this.legs;}
    this.getName = function() { return this.name;}
    this.getColor = function() { return this.color;}
}

let minnieMouse = new MakeMouse('black', 'minnie', 3, 2);
