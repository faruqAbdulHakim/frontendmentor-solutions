const counter = document.querySelectorAll('.stats__stats-number');

counter.forEach((number) => {
  const updateCounter = () => {
    const currentNumber = parseInt(number.innerText);
    const dataTarget = parseInt(number.getAttribute('data-target'));
    if (currentNumber < dataTarget) {
      number.innerText = Math.ceil(currentNumber + dataTarget / 10)
      setTimeout(updateCounter, 100)
    } else {
      number.innerText = dataTarget;
    }
  }
  updateCounter();
})