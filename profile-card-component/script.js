const profileStatsCount = document.querySelectorAll('.profile__stats__count');

const shortNumberFormat = (number) => {
  const dividedNumber = number / 1000;
  if (dividedNumber >= 1) return `${dividedNumber}K`
  return number
}
const longNumberFormat = (numberStr) => {
  if (numberStr.includes('K')) return parseFloat(numberStr.replace(/[a-zA-Z]/g, '')) * 1000;
  return parseFloat(numberStr)
}

profileStatsCount.forEach((count) => {
  count.innerText = 0;
  const target = parseInt(count.getAttribute('data-target'));
  const updateNumber = () => {
    const currentNumber = longNumberFormat(count.innerText);
    if (currentNumber < target) {
      count.innerText = shortNumberFormat(currentNumber + target / 20)
      setTimeout(() => {
        updateNumber();
      }, 100)
    }
  }
  updateNumber();
})