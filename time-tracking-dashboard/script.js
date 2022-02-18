const timeTrackingData = await fetch('./data.json')
  .then((response) => response.json());

const getTimeTrackData = (query) => {
  return timeTrackingData
    .find(( { title } ) => {
      return title.toLowerCase() === query.toLowerCase()
    }).timeframes
}

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const contentWrapperEls = document.querySelectorAll('[data-content="content-wrapper"]')
const updateContent = (timeQuery, dataTimeQuery) => {
  contentWrapperEls.forEach(async (contentWrapperEl) => {
    const dataType = contentWrapperEl.getAttribute('data-type');
    const timeData = getTimeTrackData(dataType);
    
    contentWrapperEl.classList.add('card-content-animation');

    await delay(300);

    const currentTime = contentWrapperEl.querySelector('[data-content="current-time"]');
    currentTime.innerText = `${timeData[timeQuery].current}hrs`
    const lastTime = contentWrapperEl.querySelector('[data-content="last-time"]');
    lastTime.innerText = `Last ${dataTimeQuery} - ${timeData[timeQuery].previous}hrs`;

    contentWrapperEl.classList.remove('card-content-animation');
  })
}
updateContent('weekly', 'Week');


// Change time track option
const timeOptions = document.querySelectorAll('.time-select-wrapper > button');

const removeSelectedTimeOption = () => {
  timeOptions.forEach((timeOption) => {
    timeOption.classList.remove('c-white');
  })
}

timeOptions.forEach((timeOption) => {
  timeOption.addEventListener('click', () => {
    removeSelectedTimeOption();
    timeOption.classList.add('c-white');
    const timeQuery = timeOption.innerText.toLowerCase();
    const dataTimeQuery = timeOption.getAttribute('data-time');
    updateContent(timeQuery, dataTimeQuery);
  })
})

