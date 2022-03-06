class MainModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  addInput() {
    const inputDivider = document.createElement('div');
    inputDivider.classList.add('input-divider');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('main-modal__inner__input');
    inputContainer.innerHTML = `
    <p>
      Enter your pledge
    </p>
    <div>
      <span>$</span>
      <input type="text" placeholder="0" name="pledge" />
      <fill-button>Continue</fill-button>
    </div>
    `
    inputContainer.querySelector('fill-button').addEventListener('click', () => {
      const successModal = document.createElement('success-modal');
      this.after(successModal);
      this.remove();
    });

    return {inputDivider, inputContainer}
  }

  afterRender() {
    const innerCard = this.querySelectorAll('.main-modal__inner');
    innerCard.forEach((inner) => {
      const innerHeaderText = inner.querySelector('.main-modal__inner__header__text');
      const selectRadio = inner.querySelector('.select-radio');
      let remain = inner.querySelector('.main-modal__inner__footer > p > span');

      if (remain) {
        remain = remain.innerText;
      }
      if (remain === '0') {
        inner.classList.add('o-half');
      } else {
        innerHeaderText.addEventListener('click', () => {
          console.log('clicked')
          this.removeSelected();
          inner.classList.add('selected');
          selectRadio.classList.add('selected');
          const {inputDivider, inputContainer} = this.addInput();
          inner.append(inputDivider, inputContainer)
        })
      }
    })

    const modalCloseButton = this.querySelector('.modal-close-button');
    modalCloseButton.addEventListener('click', () => {
      this.remove();
    })

    const overlayEl = this.querySelector('overlay-el');
    overlayEl.addEventListener('click', () => {
      this.remove();
    })
  }

  removeSelected() {
    const innerCard = this.querySelectorAll('.main-modal__inner');
    innerCard.forEach((inner) => {
      const selectRadio = inner.querySelector('.select-radio');
      inner.classList.remove('selected');
      selectRadio.classList.remove('selected');

      const inputDivider = inner.querySelector('.input-divider');
      const inputContainer = inner.querySelector('.main-modal__inner__input');
      if (inputDivider) inputDivider.remove();
      if (inputContainer) inputContainer.remove();
    })
  }

  render() {
    const styles = `
      <style>
        .main-modal {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main-modal > div {
          padding: 40px;
          width: 100%;
          max-width: 720px;
          max-height: 75vh;
          overflow-y: auto;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,.15);
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .main-modal > div::-webkit-scrollbar {
          display: none;
        }
        .modal-close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }
        .modal-close-button svg path {
          fill: black;
          opacity: .4;
        }
        .modal-close-button:hover svg path {
          opacity: 1;
        }
        .main-modal h2 {
          font-size: 1.2rem;
        }
        .main-modal p {
          color: var(--gray);
        }
        .main-modal__inner {
          padding: 20px;
          border: 1px solid rgba(0,0,0,.4);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .main-modal__inner.selected {
          border: 2px solid var(--cyan);
        }
        .main-modal__inner__header {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .select-radio {
          border: 1px solid var(--gray);
          border-radius: 50%;
          width: 25px;
          aspect-ratio: 1 / 1;
          position: relative;
        }
        .select-radio.selected {
          border: 1px solid var(--cyan);
        }
        .select-radio.selected::after {
          content: "";
          width: 15px;
          top: 5px;
          left: 5px;
          aspect-ratio: 1/1;
          position: absolute;
          display: block;
          background: var(--cyan);
          border-radius: 50%;
        }
        .main-modal__inner__header__text {
          display: flex;
          flex-direction: column;
        }
        .main-modal__inner__header__text > p {
          color: var(--cyan);
        }
        .main-modal__inner__footer > p {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .main-modal__inner__footer > p > span {
          font-size: 1.4rem;
          color: black;
          font-weight: 700;
        }
        .input-divider {
          background: rgba(0,0,0,.4);
          height: .5px;
          width: calc(100% + 40px);
          transform: translateX(-20px);
        }
        .main-modal__inner__input {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px 0;
          gap: 25px;
        }
        .main-modal__inner__input > p {
          font-weight: 500;
        }
        .main-modal__inner__input > div {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
        }
        .main-modal__inner__input input {
          border-radius: 30px;
          outline: 1px solid rgba(0,0,0,.4);
          border: none;
          width: 60px;
          font-size: 1rem;
          font-weight: 700;
          padding: 0 20px 0 50px;
          height: 56px;
        }
        .main-modal__inner__input input:focus {
          outline: 1.5px solid var(--cyan);
        }
        .main-modal__inner__input span {
          position: absolute;
          top: 16px;
          left: 32px;
          color: var(--gray);
        }

        .main-modal__inner__header__text {
          cursor: pointer;
        }
        .main-modal__inner__header__text:hover h2 {
          color: var(--cyan);
        }
        .main-modal__inner__header__text:hover p {
          font-weight: 700;
        }

        @media screen and (min-width: 640px) {
          .main-modal__inner {
            position: relative
          }
          .main-modal__inner__header__text {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            font-weight: 500;
          }
          .main-modal__inner > p {
            margin-left: 45px;
          }
          .main-modal__inner__footer {
            position: absolute;
            top: 2-px;
            right: 20px;
          }
          .main-modal__inner__input {
            flex-direction: row;
            gap: unset;
            justify-content: space-between;
          }
        }
        </style>
        `
    this.innerHTML = styles + `
    <div class="main-modal">
      <overlay-el></overlay-el>
        <div>
          <button type="button" class="modal-close-button">
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill-rule="evenodd"/>
            </svg>
          </button>
          <h2>
            Back this project
          </h2>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
          <div class="main-modal__inner">
            <div class="main-modal__inner__header">
              <div class="select-radio"></div>
              <div class="main-modal__inner__header__text">
                <h2>
                  Pledge with no reward
                </h2>
              </div>
            </div>
            <p>
              Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email.
            </p>
          </div>
          <div class="main-modal__inner">
            <div class="main-modal__inner__header">
              <div class="select-radio"></div>
              <div class="main-modal__inner__header__text">
                <h2>
                  Bamboo Stand
                </h2>
                <p>
                  Pledge $25 or more
                </p>
              </div>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you'll be added to a special Backer member list.
            </p>
            <div class="main-modal__inner__footer">
              <p>
                <span>101</span> left
              </p>
            </div>
          </div>
          <div class="main-modal__inner">
            <div class="main-modal__inner__header">
              <div class="select-radio"></div>
              <div class="main-modal__inner__header__text">
                <h2>
                  Black Edition Stand
                </h2>
                <p>
                  Pledge $75 or more
                </p>
              </div>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>
            <div class="main-modal__inner__footer">
              <p>
                <span>64</span> left
              </p>
            </div>
          </div>
          <div class="main-modal__inner">
            <div class="main-modal__inner__header">
              <div class="select-radio"></div>
              <div class="main-modal__inner__header__text">
                <h2>
                  Mahogany Special Edition
                </h2>
                <p>
                  Pledge $200 or more
                </p>
              </div>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
            <div class="main-modal__inner__footer">
              <p>
                <span>0</span> left
              </p>
            </div>
          </div>
        </div>
      </div>
    `
    this.afterRender();
  }
}

customElements.define('main-modal', MainModal);