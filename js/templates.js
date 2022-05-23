import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Personaje } from './Personaje.js';
import { personajes } from './personajes.js';
import { Rey } from './Rey.js';

export function characterList(personaje = new Personaje()) {
    let list = '';
    let emoji = '';

    if (personaje instanceof Rey) {
        list += `<li>Años de reinado: ${personaje.yearsOfReign} </li>`;
        emoji = '👑';
    }
    if (personaje instanceof Luchador) {
        list += `<li>Arma: ${personaje.weapon}</li>
        <li>Destreza: ${personaje.skills}</li>`;
        emoji = '🗡';
    }
    if (personaje instanceof Escudero) {
        list += `<li>Sirve a: ${personaje.client} </li>
          <li>Peloteo: ${personaje.pelotismo}</li>`;
        emoji = '🛡';
    }
    if (personaje instanceof Asesor) {
        list += `<li>Asesora a: ${personaje.asesora}</li>`;
        emoji = '🎓';
    }

    let status = '';
    if (personaje.alive) {
        status += `<i class="fas fa-thumbs-up"></i>`;
    } else {
        status += `<i class="fas fa-thumbs-down"></i>`;
    }

    return `
     <li class="character col">
        <div class="card character__card">
            <img
                src="./img/${personaje.name.toLowerCase()}.jpg"
                alt="${personaje.name} ${personaje.family} del personaje"
                class="character__picture card-img-top"
            />
            <div class="card-body">
                <h2 class="character__name card-title h4">${personaje.name} ${
        personaje.family
    } </h2>
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
            <i class="emoji">${emoji}</i>
        </div>
    </li>
    `;
}

export function comunicationTemplate(personaje = new Personaje()) {
    return `
    <p class="comunications__text display-1">${personaje.comunication}</p>
      <img
        class="comunications__picture"
        src="img/${personaje.name.toLowerCase()}.jpg"
        alt="${personaje.name}, ${personaje.family}"
      />
      `;
}
