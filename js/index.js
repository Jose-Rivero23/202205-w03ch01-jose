import { personajes } from './personajes.js';
import { characterList, comunicationTemplate } from './templates.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let listHtml = '';
        personajes.forEach((personaje) => {
            listHtml += characterList(personaje) + '\n';
        });
        document.querySelector('ul.characters-list').innerHTML = listHtml;

        const buttons = document.querySelectorAll('.character__action');
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                let personaje = personajes.find(
                    (item) => item.name === event.target.id
                );
                if (event.target.textContent === 'habla') {
                    let comunication =
                        document.querySelector('div.comunications');
                    comunication.innerHTML = comunicationTemplate(personaje);
                }
            });
        });
    });
})();
