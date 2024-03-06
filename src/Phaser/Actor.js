const Action = require('./Action');

class Actor{
    constructor(name, health, damage){
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    GetFonct(...fonc){
        return fonc;
    }
}
module.exports=Actor;