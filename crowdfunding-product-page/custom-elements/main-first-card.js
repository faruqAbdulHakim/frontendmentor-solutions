class MainFirstCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const styles = `
      <style>
        .main-first-card {
          margin: 0 20px;
          margin-top: -85px;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .main-first-card::before {
          content: "";
          width: 56px;
          height: 56px;
          display: block;
          position: absolute;
          top: -28px;
          background: url('./images/logo-mastercraft.svg');
          background-size: contain;
        }
        .main-first-card > div {
          padding: 40px;
          width: 100%;
          max-width: 720px;
          background: white;
          border-radius: 10px;
          border: .5px solid rgba(0,0,0,.1);
        }
        .main-heading-text {
          text-align: center;
          font-size: 1.4rem;
          margin-top: 10px;
        }
        .main-info-text {
          text-align: center;
          color: var(--gray);
          margin-top: 20px;
        }
        .main-cta-container {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        @media screen and (min-width: 640px) {
          .main-heading-text {
            font-size: 1.6rem;
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="main-first-card">
        <div>
          <h1 class="main-heading-text">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p class="main-info-text">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div class="main-cta-container">
            <bookmark-button></bookmark-button>
          </div>
        </div>
      </div>
    `
    const fillButton = document.createElement('fill-button');
    fillButton.setText('Back this project');
    this.querySelector('.main-cta-container').prepend(fillButton);
  }
}

customElements.define('main-first-card', MainFirstCard)