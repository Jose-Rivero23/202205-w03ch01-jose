import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    asesora;
    constructor(name, family, age, asesora = new Personaje()) {
        super(name, family, age);
        this.asesora = asesora;
        this.comunication = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
