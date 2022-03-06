class ProgressBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const styles = `
      <style>
        .progress-bar {
          height: 14px;
          background: rgba(0,0,0,.04);
          border-radius: 7px;
          overflow: hidden;
        }
        .progress-bar > div {
          height: 100%;
          width: 70%;
        }

        @keyframes progressBarAnimation {
          from {
            width: 0;
          } to {
            width: 100%;
          }
        }
        .progress-bar > div > span {
          height: 100%;
          display: block;
          background: var(--cyan);
          border-radius: 0 7px 7px 0;
          animation: progressBarAnimation 3s ease-in-out;
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="progress-bar">
        <div>
          <span></span>
        </div>
      </div>
    `
  }
}

customElements.define('progress-bar', ProgressBar);
