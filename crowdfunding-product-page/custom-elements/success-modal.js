class SuccessModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  afterRender() {
    const overlayEl = this.querySelector('overlay-el');
    const button = this.querySelector('fill-button');
    overlayEl.addEventListener('click', () => {
      this.remove();
    });
    button.addEventListener('click', () => {
      this.remove();
    });
  }

  render() {
    const styles = `
    <style>
      .success-modal {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .success-modal > div {
        padding: 40px;
        width: 100%;
        max-width: 520px;
        max-height: 75vh;
        background: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        position: relative;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .success-modal > div::-webkit-scrollbar {
        display: none;
      }
      .success-modal h2 {
        font-size: 1.2rem;
      }
      .success-modal p {
        color: var(--gray);
        text-align: center;
      }
      
    </style>
    `

    this.innerHTML = styles + `
    <div class="success-modal">
      <overlay-el></overlay-el>
      <div>
        <img src="./images/icon-check.svg" alt="" aria-hidden="true"/>
        <h2>
          Thanks for your support
        </h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
          You will get an email once our campaign is completed
        </p>
        <fill-button>Got it!</fill-button
      </div>
    </div>
    `
    this.afterRender();
  }
}

customElements.define('success-modal', SuccessModal);
