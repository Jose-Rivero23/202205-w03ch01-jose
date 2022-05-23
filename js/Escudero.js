import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    constructor(name, family, age, client = new Luchador(), pelotismo) {
        super(name, family, age);
        this.client = client;
        this.pelotismo = pelotismo;
        this.comunication = 'Soy un loser';
    }
}
