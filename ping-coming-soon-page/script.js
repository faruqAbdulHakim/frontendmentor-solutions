const formEl = document.querySelector('.form');
const emailInputEl = document.querySelector('.email-input');

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

emailInputEl.addEventListener('focus', () => {
  removeErrorState();
})
emailInputEl.addEventListener('blur', () => {
  const isError = !checkEmailValidation();
  if (isError) addErrorState();
  else removeErrorState();
})
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const isError = !checkEmailValidation();
  if (isError) addErrorState();
  else {
    removeErrorState();
    alert(JSON.stringify(emailInputEl.value));
  }
})

const checkEmailValidation = () => {
  return emailRegExp.test(emailInputEl.value);
}
const addErrorState = () => {
  removeErrorState(); //avoid duplicata error msg
  formEl.classList.add('error');
  
  const errorText = document.createElement('p');
  errorText.classList.add('error-text');
  errorText.innerText = 'Please provide a valid email address';
  errorText.tabIndex = 0;

  formEl.append(errorText);
}
const removeErrorState = () => {
  formEl.classList.remove('error');

  const errorText = formEl.querySelector('.error-text');
  if (errorText) formEl.removeChild(errorText);
}