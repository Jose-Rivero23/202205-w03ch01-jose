import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';
import { Rey } from './Rey.js';

let p1 = new Rey('Joffrey', 'Baratheon', '14', '1');
let p2 = new Luchador('Jaime', 'Lannister', '43', 'Espada', 8);
let p3 = new Luchador('Daenerys', 'Targaryen', '24', 'Dragons', 10);
let p4 = new Asesor('Tyrion', 'Lannister', '39', 'Daenerys');
let p5 = new Escudero('Bronn', '', '32', 'Jaime', 5);

export function render() {
    GoT = [p1, p2, p3, p4, p5];

    return GoT;
}
render();

console.log(GoT);
