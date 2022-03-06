class OverlayEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const styles = `
      <style>
        .overlay-el {
          background-color: black;
          opacity: .2;
          position: fixed;
          inset: 0;
          height: 100%;
          width: 100%;
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="overlay-el"></div>
    `
  }
}

customElements.define('overlay-el', OverlayEl);