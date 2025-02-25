// Chapter09_Understand object-oriented programming

// Dogs

// Complete the following program to add the definition of the Dog class.

    // Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        if (this.size > 60) {
            return "Grrr! Grrr!";
        }
        else return "Woof! Woof!";
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


// Character inventory
/*
Improve the example RPG to add character inventory management according to the following rules:

    A character's inventory contains a number of gold and a number of keys.

    Each character begins with 10 gold and 1 key.

    The character description must show the inventory state.

    When a character slays another character, the victim's inventory goes to its vanquisher.

Here's the expected execution result.
*/

class Character {
    constructor(name, hp, strength)
    {   
        this.name = name;
        this.hp = hp;
        this.strength = strength;
        this.xp = 0;
        this.gold = 10;
        this.key = 1;
    }

    inventory(){
        return `${this.name} has ${this.hp} health points, ${this.strength} as strength, ${this.xp} points, ${this.gold} gold and ${this.key} key(s)`;
    }

    attack(anotherCharacter) {
        if(anotherCharacter.hp > 0){
            anotherCharacter.hp -= this.strength;
            console.log(`${this.name} attacks ${anotherCharacter.name} and causes ${this.strength} damage points`);
            console.log(`${anotherCharacter.name} has ${anotherCharacter.hp} health points left`);
            if(anotherCharacter.hp <= 0) {
                this.gold += anotherCharacter.gold;
                this.key += anotherCharacter.key;
                this.xp += 10;
                console.log(`${this.name} eliminated ${anotherCharacter.name} and wins 10 experience points`);
            }
        }
        else {
            console.log(`${anotherCharacter} was already defeated!`)
        }
    }
}

const display = (message => console.log(message));
const welcomeMessage = 'Welcome to the adventure! Here are our heroes:'
display(welcomeMessage);
const aurora = new Character('aurora', 150, 25);
display(aurora.inventory());
const glacius = new Character('glacius', 130, 0);
const monsterMessage = " wild monster has appeared: it's named Spike";
display(monsterMessage);
const spike = new Character('spike', 40, 20);
spike.attack(aurora);
spike.attack(glacius);
aurora.attack(spike);
glacius.attack(spike);
display(aurora.inventory());
display(glacius.inventory());

