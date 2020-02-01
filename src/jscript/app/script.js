import markupTemplate from '../templates/js-menu.hbs';
import itemsArray from '../../menu.json';

const jsMenu = document.querySelector('.js-menu');
const markup = itemsArray.map(item => markupTemplate(item)).join('');

jsMenu.insertAdjacentHTML('beforeend', markup);
