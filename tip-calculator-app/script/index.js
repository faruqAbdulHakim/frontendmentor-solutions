import Tip from './tipData.js';

// Bill
const billInput = document.querySelector('input[name="bill"]');
billInput.addEventListener('input', () => {
  const { value } = billInput;
  if (value !== '') {
    Tip.updateBill(parseFloat(value));
  } else {
    Tip.updateBill(0);
  }
})

// Tip options
const tipOptions = document.querySelectorAll('.tip-option');
const customTip = document.querySelector('.tip-selections > input');

const removeSelectedOption = () => {
  tipOptions.forEach((tipOption) => {
    tipOption.classList.remove('selected');
  })
  customTip.classList.remove('selected');
}


tipOptions.forEach((tipOption) => {
  tipOption.addEventListener('click', () => {
    removeSelectedOption();
    tipOption.classList.add('selected');
    const value = parseInt(tipOption.innerText.split('%')[0]);
    Tip.updateTipPercentage(value);
  })
})

customTip.addEventListener('focus', () => {
  removeSelectedOption();
  customTip.classList.add('selected');
});

customTip.addEventListener('input', () => {
  const value = parseFloat(customTip.value);
  if (value !== '') {
    Tip.updateTipPercentage(value);
  } else {
    Tip.updateTipPercentage(0);
  }
})

customTip.addEventListener('blur', () => {
  const { value } = customTip;
  if (value === '') {
    removeSelectedOption();
  }
})

// Total people
const totalPeopleInput = document.querySelector('input[name="people"]');
totalPeopleInput.addEventListener('input', () => {
  let { value } = totalPeopleInput;
  if (value !== '') {
    value = parseInt(value);
    totalPeopleInput.value = value;
    Tip.updateTotalPeople(value);
  } else {
    Tip.updateTotalPeople(0);
  }
})

totalPeopleInput.addEventListener('blur', () => {
  let { value } = totalPeopleInput
  if (value === '' || value === '0') {
    totalPeopleInput.classList.add('outline-error');

    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.innerText = 'Can\'t be zero';
    totalPeopleInput.parentNode.appendChild(errorText)
  }
})

totalPeopleInput.addEventListener('focus', () => {
  totalPeopleInput.classList.remove('outline-error');
  const parentNode = totalPeopleInput.parentNode;
  const errorText = parentNode.querySelector('.error-text');
  if (errorText) parentNode.removeChild(errorText);
})

// Reset button 
const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
  billInput.value = '';
  Tip.updateBill(0);

  customTip.value = '';
  removeSelectedOption();
  const fivePercentTip = document.querySelector('.tip-option:first-child');
  fivePercentTip.classList.add('selected');
  Tip.updateTipPercentage(5);
  
  totalPeopleInput.value = '';
  Tip.updateTotalPeople(0);
})
