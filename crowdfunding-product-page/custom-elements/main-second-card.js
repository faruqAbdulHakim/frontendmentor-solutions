class MainSecondCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const styles = `
      <style>
        .main-second-card {
          margin: 20px;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .main-second-card > div {
          padding: 40px;
          width: 100%;
          max-width: 720px;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,.15);
        }
        .progress-info {
          display: grid;
          grid-template-row: repeat(3, 1fr);
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
        }
        .progress-info > h2 {
          font-size: 1.8rem;
          text-align: center;
          line-height: 2rem;
          position: relative;
        }
        .progress-info > h2:not(:last-child)::after {
          content: "";
          display: block;
          position: absolute;
          width: 100px;
          bottom: -15px;
          left: calc(50% - 50px);
          height: .5px;
          background: rgba(0,0,0,.2)
        }
        .progress-info > h2 > span {
          font-size: 1rem;
          color: var(--gray);
          font-weight: 400;
          display: block;
        }

        @media screen and (min-width: 720px) {
          .progress-info {
            grid-template-rows: 1fr;
            grid-template-columns: repeat(3, 1fr);
          }
          .progress-info > h2 {
            text-align: left;
          }
          .progress-info > h2:not(:last-child)::after {
            height: 60px;
            width: 1px;
            bottom: calc(50% - 30px);
            left: unset;
            right: 0px;
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="main-second-card">
        <div>
          <div class="progress-info">
            <h2>
              $89,914
              <span>
                of $100,000 backed
              </span>
            </h2>
            <h2>
            5,007
            <span>
              total backers
            </span>
            </h2>
            <h2>
              56
              <span>
                days left
              </span>
            </h2>
          </div>
          <progress-bar></progress-bar>
        </div>
      </div>

    `
  }
}

customElements.define('main-second-card', MainSecondCard);
