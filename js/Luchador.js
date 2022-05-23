import { Personaje } from './Personaje.js';
export class Luchador extends Personaje {
    weapon;
    skills;
    comunication;
    constructor(name, family, age, weapon, skills) {
        super(name, family, age);
        this.weapon = weapon;
        this.skills = skills;
        this.comunication = 'Primero pego y luego pregunto';
    }
}
