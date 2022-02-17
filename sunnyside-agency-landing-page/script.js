const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('nav');

const hideNavOnMobile = () => {
  if (window.screen.width < 768) {
    nav.style.display = 'none';
  } else {
    nav.removeAttribute('style');
  }
};
hideNavOnMobile();
window.addEventListener('resize', () => {
  hideNavOnMobile();
})

navButton.addEventListener('click', () => {
  const currentNavDisplay = nav.style.display;
  const isNavHidden = currentNavDisplay === 'none';
  console.log(currentNavDisplay, isNavHidden);
  if (isNavHidden) {
    nav.removeAttribute('style');
  } else {
    nav.style.display = 'none';
  }
})

const learnMoreEls = document.querySelectorAll('.content-learn-more');
console.log(learnMoreEls)
learnMoreEls.forEach((el) => {
  const underline = el.parentNode.querySelector('.underline');
  el.addEventListener('mouseover', () => {
    underline.style.opacity = 1;
  })
  el.addEventListener('mouseout', () => {
    underline.removeAttribute('style');
  })
})