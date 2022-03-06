class FillButton extends HTMLElement {
  connectedCallback() {
    this.text = this.innerText;
    this.render();
  }

  setText(text) {
    this.text = text;
    this.render();
  }

  setIsDisabled(isDisabled) {
    const button = this.querySelector('button');
    if (isDisabled) {
      button.disabled = true;
      button.classList.add('disabled');
    }
  }

  render() {
    const styles = `
      <style>
        .fill-button {
          color: white;
          background: var(--cyan);
          height: 56px;
          border-radius: 28px;
          padding: 0 28px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s ease-out;
        }
        .fill-button:hover {
          background: var(--dark-cyan);
        }
        .fill-button:active {
          opacity: .4;
        }
        .fill-button.disabled {
          background: var(--gray);
          cursor: unset;
        }
        .fill-button.disabled:hover {
          background: var(--gray);
        }
        .fill-button.disabled:active {
          opacity: 1;
        }
      </style>
    `
    this.innerHTML = styles + `
      <button class="fill-button" type="button">
        ${this.text}
      </button>
    `
  }
}

customElements.define('fill-button', FillButton);
