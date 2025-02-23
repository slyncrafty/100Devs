//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function CreateSFCharacter(name, punch, taunt, specialMove){
    this.name = name;
    this.punch = punch;
    this.taunt = taunt;
    this.specialMove = specialMove;
    this.getName = function() {
        return this.name;
    }
    this.getSpecialMove = function() {
        console.log(this.specialMove);
    }
    this.doTaunt = function() {
        return alert(this.taunt);
    }
}

let chun_li = new CreateSFCharacter('chun-li', '1-2-3', 'whatever', 'kick kick kick')