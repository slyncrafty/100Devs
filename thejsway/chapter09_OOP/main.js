//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

// Context: a multiplayer RPG

// Coding Time!

/*
**  Dogs
**
**  Complete the following program to add the definition of the Dog class.
**
**  Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".
*/
// TODO: define the Dog class here
class Dog{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }

    bark = function (){
        if(this.size > 60)  return "Grrr! Grrr!";
        else return "Woof! Woof!"
    }
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



/*
**Character inventory
**
**Improve the example RPG to add character inventory management according to the **following rules:
**
**    A character's inventory contains a number of gold and a number of keys.
**
**    Each character begins with 10 gold and 1 key.
**
**    The character description must show the inventory state.
**
**    When a character slays another character, the victim's inventory goes to its vanquisher.
**
*/

class Character{
    constructor(name, hp, strength, isMonster){
        this.name = name;
        this.hp = hp;
        this.strength = strength;
        this.XP = 0;
        this.gold = 10;
        this.key = 1;
        this.isMonster = isMonster;
        if(this.isMonster) this.monsterInit();
        else this.showInventory();
    }

    attacked(attacker){
        this.hp -= attacker.strength;
        if(this.hp <= 0) {
            this.hp = 0;
            attacker.XP += 10;
            console.log(`${attacker.name} has eliminated ${this.name} and wins 10 experience points`);
        }
        else this.healthCheck();
    }

    attack(attacked){
        console.log(`${this.name} attacks ${attacked.name} and causes ${this.strength} damage points`);
        attacked.attacked(this);
    }

    healthCheck(){
        console.log(`${this.name} has ${this.hp} health points left`)
    }
    showInventory(){
        console.log(`${this.name} has ${this.hp} health points, ${this.strength} as strength and ${this.XP} XP points`)
    }
    monsterInit(){
        console.log(`A wild monster has appeared: it's named ${this.name}`);
    }
}

const welcomeMessage = 'Welcome to the adventure! Here are our heroes:';

const aurora = new Character('Aurora', 150, 25);
const glacious = new Character('Glacious', 130, 30);
const monster_spike = new Character('Spike', 40, 20, true);
monster_spike.attack(aurora);
monster_spike.attack(glacious);
aurora.attack(monster_spike);
glacious.attack(monster_spike);

aurora.showInventory();
glacious.showInventory();

/*
Account list

Let's build upon a previous account object exercise. A bank account is still defined by:

    A name property.
    A balance property, initially set to 0.
    A credit method adding the value passed as an argument to the account balance.
    A describe method returning the account description.

Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
*/

class BankAccount {
    constructor (name){
        this.name = name;
        this.balance = 0;
    }

    credit(amount) {
        this.balance += amount;
        console.log(this.describe());
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const sean = new BankAccount('Sean');
const brad = new BankAccount('Brad');
const georges = new BankAccount('Georges');

sean.credit(1000);
brad.credit(1000);
georges.credit(1000);
