import { GoT } from './personajes.js';
import { characterList } from './templates.js';

(() => {
    document.addEventListener('DOMContentLoaded', index);
    characterList(GoT[0]);
})();
