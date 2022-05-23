import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    yearsOfReign;
    comunication;

    constructor(name, family, age, yearsOfReign) {
        super(name, family, age);
        this.yearsOfReign = yearsOfReign;
        this.comunication = 'Vais a morir todos';
    }
}
