const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyClassList = document.body.classList;
const jsInputCheckbox = document.querySelector('.js-switch-input');

if (localStorage.getItem('CurrentTheme')) {
  bodyClassList.add(localStorage.getItem('CurrentTheme'));
}

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
  if (bodyClassList.value) bodyClassList.remove(Theme.DARK);
  localStorage.setItem('CurrentTheme', Theme.LIGHT);
  return bodyClassList.add(Theme.LIGHT);
}

jsInputCheckbox.addEventListener('change', handleClick);
