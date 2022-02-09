const formEl = document.querySelector('form');
const inputEl = document.querySelector('form input');

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const addErrorState = () => {
  removeErrorState() //avoid multiple error notification

  inputEl.classList.add('border-error');

  const errorImg = document.createElement('img');
  errorImg.classList.add('error-img');
  errorImg.src = 'images/icon-error.svg';
  errorImg.alt = '';
  errorImg.ariaHidden = true;

  const errorMsg = document.createElement('p');
  errorMsg.classList.add('error-msg');
  errorMsg.innerText = 'Please provide a valid email';

  formEl.append(errorImg, errorMsg);
}

const removeErrorState = () => {
  inputEl.classList.remove('border-error');

  const errorImg = formEl.querySelector('.error-img');
  const errorMsg = formEl.querySelector('.error-msg');
  if (errorImg) formEl.removeChild(errorImg);
  if (errorMsg) formEl.removeChild(errorMsg);
}

const validate = (inputEl) => {
  const isError = !emailRegex.test(inputEl.value);
  if (isError) {
    addErrorState();
  }
  else {
    removeErrorState();
  }
  return isError;
}

inputEl.addEventListener('blur', () => {
  validate(inputEl);
})

inputEl.addEventListener('focus', () => {
  removeErrorState();
})

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const isError = validate(inputEl);
  if (!isError) alert(JSON.stringify(inputEl.value));
})