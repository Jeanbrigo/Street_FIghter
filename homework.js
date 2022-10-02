class Fighter {
    constructor (name, health = 10, strength, defense){
        this.name = name
        this.health = health
        this.strength = Math.floor(Math.random()*(10-5)+5)
        this.defense = Math.floor(Math.random()*(10-5)+5)
    }
    attack(otherFighter){    //attack: one fighter attacks the other, the damage dealth should be the attackers strength - defenders defense. After the attack the following should be logged "|Attacker| did |x| damage to |defender| who is left with |y| health" use interpolation or concatenation. Make sure to check so you don't accidentally do negative damage.
        if (this.strength - otherFighter.defense >= 0) {
            otherFighter.health = otherFighter.health - (this.strength - otherFighter.defense)
            console.log(`${this.name} did ${(this.strength-otherFighter.defense)} damage to ${otherFighter.name} who is left with ${otherFighter.health} health!`)}
        else {
            console.log(`${this.name} did 0 damage to ${otherFighter.name} who is left with ${otherFighter.health} health!`)}
    }
}

const ryu = new Fighter("Ryu",this.health,this.strength,this.defense);
const ken = new Fighter("Ken",this.health,this.strength,this.defense);

console.log(ryu, ken)

for(rounds = 0; rounds < 10; rounds += 1 ){
    ryu.attack(ken);
    ken.attack(ryu);
    if (ken.health <= 0 && ryu.health <= 0){
        return console.log("It's a draw!")
    }
    else if (ken.health <= 0){
        return console.log("Ryu is the winner!")
    }
    else if(ryu.health <= 0){
        return console.log("Ken is the winner!")
    }
    else if(rounds === 9){
        return console.log("It's a draw!")
    }
}
