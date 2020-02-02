import markupTemplate from '../templates/js-menu.hbs';
import itemsArray from '../../menu.json';

const jsMenu = document.querySelector('.js-menu');
const markup = itemsArray.map(item => markupTemplate(item)).join('');

jsMenu.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyClassList = document.body.classList;
const jsInputCheckbox = document.querySelector('.js-switch-input');

bodyClassList.add(localStorage.getItem('CurrentTheme'));

if (bodyClassList.value === Theme.DARK) jsInputCheckbox.checked = true;

function handleClick(e) {
  let isChecked = e.target.checked;

  if (isChecked) {
    isChecked = false;
    localStorage.setItem('CurrentTheme', Theme.DARK);
    bodyClassList.remove(Theme.LIGHT);
    return bodyClassList.add(Theme.DARK);
  }

  isChecked = true;
  bodyClassList.remove(Theme.DARK);
  localStorage.setItem('CurrentTheme', Theme.LIGHT);
  return bodyClassList.add(Theme.LIGHT);
}

jsInputCheckbox.addEventListener('change', handleClick);
