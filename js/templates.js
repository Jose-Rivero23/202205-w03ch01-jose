import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';
import { GoT } from './personajes.js';
import { Rey } from './Rey.js';

export function characterList(personaje) {
    let list = '';

    if (personaje instanceof Rey) {
        list = `<li>Años de reinado: ${personaje.yearsOfReign} </li>`;
    }
    if (personaje instanceof Luchador) {
        `<li>Arma: ${personaje.weapon}</li>
        <li>Destreza: ${personaje.skills}</li>`;
    }
    if (personaje instanceof Escudero) {
        `<li>Sirve a: ${personaje.client} </li>
          <li>Peloteo: ${personaje.pelotismo}</li>`;
    }
    if (personaje instanceof Asesor) {
        `<li>Asesora a: ${personaje.asesora}</li>`;
    }

    let status = '';
    if (personaje.alive) {
        status = `<i class="fas fa-thumbs-down"></i>`;
    } else {
        status = `<i class="fas fa-thumbs-up"></i>`;
    }

    let img = '';
    switch (personaje.name) {
        case 'Bronn':
            img = `src = 'img/bronn.jpg'`;
            break;
        case 'Daenerys':
            img = `src = 'img/daenerys.jpg'`;
            break;
        case 'Jaime':
            img = `src = 'img/jaime.jpg'`;
            break;
        case 'Joffrey':
            img = `src = 'img/joffrey.jpg'`;
            break;
        case 'Tyrion':
            img = `src = 'img/tyrion.jpg'`;
            break;
    }

    return ` <li class="character col">
        <div class="card character__card">
            <img
                ${img}
                alt="${personaje.name} ${personaje.family} del personaje"
                class="character__picture card-img-top"
            />
            <div class="card-body">
                <h2 class="character__name card-title h4">${personaje.name} ${personaje.family} </h2>
                <div class="character__info">
                    <ul class="list-unstyled">
                        <li>Edad: ${personaje.age} años</li>
                        <li>
                            Estado: 
                            ${status}
                        </li>
                    </ul>
                </div>
                <div class="character__overlay">
                    <ul class="list-unstyled">
                        ${list}
                    </ul>
                    <div class="character__actions">
                        <button class="character__action btn">habla</button>
                        <button class="character__action btn">muere</button>
                    </div>
                </div>
            </div>
            <i class="emoji"></i>
        </div>
    </li>
    `;
}
