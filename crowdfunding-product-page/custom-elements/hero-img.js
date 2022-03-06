class HeroImg extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const styles = `
      <style> 
        .hero-img {
          height: 300px;
          width: 100%;
          display: block;
          background-image: url('./images/image-hero-mobile.jpg');
          background-position: center;
          background-size: cover;
        }
        
        @media screen and (min-width: 640px) {
          .hero-img {
            height: 350px;
          }
        }

        @media screen and (min-width: 1280px) {
          .hero-img {
            height: 400px;
            background-image: url('./images/image-hero-desktop.jpg');
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="hero-img"></div>
    `
  }
}

customElements.define('hero-img', HeroImg)