const shareButton = document.querySelector('.article__share-button');
const articleInfoAndShareWrapper = document.querySelector('.article__info-and-share-wrapper')

shareButton.addEventListener('click', () => {
  articleInfoAndShareWrapper.classList.toggle('show-share-options');
})