// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name, role){
        this._name = name;
        this._role = role;
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role;
    }
    getGreeting() {
        return `Hello, my name is ${this.name}, and I am on the ${this._role} team!`;
    }
    sayHello(){
        console.log(this.getGreeting())
    }
    sayBye(){
        console.log("It's been a pleasure working with you")
    }
}

class Front extends Contractor{
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }
    get tech(){
        return this._tech;
    }

    getGreeting() {
        return `${super.getGreeting()} --specifically working on ${this.tech}`;
    }
}

class Back extends Contractor{
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }
    get tech(){
        return this._tech;
    }
    
    getGreeting() {
        return `${super.getGreeting()} --specifically working on ${this.tech}`;
    }
}

// let bob = new Contractor('Bob','Front-end')
// let machi = new Front('The Machine','Front-end','React')
// let simba = new Back('Simba','Back-end','Node')

// let agencyList = [bob,machi,simba]

// // polymorphism
// for(person of agencyList){
//     person.sayHello()
// }


let machi = new Front('The Machine','Front-end','React')
machi.sayHello();