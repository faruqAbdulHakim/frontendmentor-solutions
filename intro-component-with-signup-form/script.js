const formEl = document.querySelector('form');
const inputEls = document.querySelectorAll('form input');

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

// for screenshot purpose
inputEls[0].value = 'Jonathan ';
inputEls[0].focus();

const formValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const formValidate = (nodeEl) => {
  const { name, value } = nodeEl;
  if (value === '') {
    if (name === 'firstName') return {error: 'First Name can\'t empty'};
    if (name === 'lastName') return {error: 'Last Name can\'t empty'};
    if (name === 'email') return {error: 'Email can\'t empty'};
    if (name === 'password') return {error: 'Password can\'t empty'};
  } else if (name === 'email' && !emailRegex.test(value)) {
    return {error: 'Looks like this is not an email'};
  } else if (name === 'password' && value.length < 8) {
    return {error: 'Minimum password length is 8 characters'};
  }
  return {};
}

const validateInput = (inputEl) => {
  const { error } = formValidate(inputEl);
    if (error) {
      addErrorState(inputEl, error);
      return error;
    } else {
      removeErrorState(inputEl);
    }
}

const addErrorState = (inputEl, errorMsg) => {
  removeErrorState(inputEl); // avoid duplicate errormsg

  inputEl.classList.add('outline-error');
  const inputWrapper = inputEl.parentNode;

  const errorText = document.createElement('p');
  errorText.classList.add('input-error');
  errorText.classList.add('text-red');
  errorText.classList.add('font-500');
  errorText.innerText = errorMsg;
  
  const errorIcon = document.createElement('img');
  errorIcon.classList.add('error-img');
  errorIcon.src = 'images/icon-error.svg';
  errorIcon.alt = '';
  errorIcon.ariaHidden = true;

  inputWrapper.appendChild(errorText);
  inputWrapper.appendChild(errorIcon);
}

removeErrorState = (inputEl) => {
  inputEl.classList.remove('outline-error');
  
  const inputWrapper = inputEl.parentNode;
  
  const errorText = inputWrapper.querySelector('p.input-error');
  const errorIcon = inputWrapper.querySelector('img.error-img');
  if (errorText) inputWrapper.removeChild(errorText);
  if (errorIcon) inputWrapper.removeChild(errorIcon);
}

inputEls.forEach((inputEl) => {
  inputEl.addEventListener('blur', (event) => {
    formValues[event.target.name] = event.target.value;
    validateInput(inputEl);
  })
  inputEl.addEventListener('focus', () => {
    removeErrorState(inputEl);
  })
})

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  let someInputError = false;
  inputEls.forEach((inputEl) => {
    const inputError = validateInput(inputEl);
    if (inputError) someInputError = true;
  })
  
  if(!someInputError) alert(JSON.stringify(formValues));
})