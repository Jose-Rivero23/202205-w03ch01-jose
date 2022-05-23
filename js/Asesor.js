import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    client;
    constructor(name, family, age, client = new Personaje()) {
        super(name, family, age);
        this.client = client;
        this.comunication = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
