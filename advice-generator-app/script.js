const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const randomButton = document.getElementById('random-button');

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const getRandomAdvice = () => {
  return new Promise((resolve) => {
    fetch('https://api.adviceslip.com/advice', {method: 'GET'})
      .then((response) => response.json())
      .then((responseJSON) => resolve(responseJSON))
      .catch(() => {
        resolve({
          slip: {
            id: -1,
            advice: 'failed to fetch advice'
          }
        })
      });
  });
}

const updateAdvice = async () => {
  const newAdvice = await getRandomAdvice();
  const { id, advice } = newAdvice.slip;
  adviceId.innerText = id;
  adviceText.innerText = advice;
}

randomButton.addEventListener('click', async () => {
  adviceText.parentNode.classList.add('collapsed');
  await delay(1000);
  await updateAdvice();
  adviceText.parentNode.classList.remove('collapsed');
})