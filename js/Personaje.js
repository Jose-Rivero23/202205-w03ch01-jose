export class Personaje {
    name;
    family;
    age;
    alive;
    serie;
    constructor(name = '', family = '', age = '') {
        this.name = name;
        this.family = family;
        this.age = age;
        this.alive = true;
        this.serie = 'Juego de Tronos';
    }
}
