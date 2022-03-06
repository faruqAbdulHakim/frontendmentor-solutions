class MainThirdCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const styles = `
      <style>
        .main-third-card {
          margin: 20px;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .main-third-card > div {
          padding: 40px;
          width: 100%;
          max-width: 720px;
          background: white;
          border-radius: 10px;
          border: .5px solid rgba(0,0,0,.1);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .main-third-card h2 {
          font-size: 1.2rem;
        }
        .main-third-card p {
          color: var(--gray);
        }
        .main-third-card__inner {
          border: .5px solid rgba(0,0,0,.15);
          border-radius: 10px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .main-third-card__inner__header {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .main-third-card__inner__header h3 {
          font-size: 1.2rem;
        }
        .main-third-card__inner__header p {
          color: var(--cyan);
          font-weight: 500;
        }
        .main-third-card__inner__footer {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .main-third-card__inner__footer > p {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .main-third-card__inner__footer > p > span {
          font-size: 1.8rem;
          font-weight: 700;
          color: black;
        }

        @media screen and (min-width: 640px) {
          .main-third-card__inner__header {
            flex-direction: row;
            gap: unset;
            justify-content: space-between;
          }
          .main-third-card__inner__footer {
            flex-direction: row;
            gap: unset;
            justify-content: space-between;
            align-items: center;
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="main-third-card">
        <div>
          <h2>
            About this project
          </h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.        
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
          <div class="main-third-card__inner">
            <div class="main-third-card__inner__header">
              <h3>Bamboo Stand</h3>
              <p>Pledge $25 or more</p>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you'll be added to a special Backer member list.
            </p>
            <div class="main-third-card__inner__footer">
              <p>
                <span>101</span> left
              </p>
              <fill-button>Select Reward</fill-button>
            </div>
          </div>
          <div class="main-third-card__inner">
            <div class="main-third-card__inner__header">
              <h3>Black Edition Stand</h3>
              <p>Pledge $75 or more</p>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
              member list. Shipping is included.          
            </p>
            <div class="main-third-card__inner__footer">
              <p>
                <span>64</span> left
              </p>
              <fill-button>Select Reward</fill-button>
            </div>
          </div>
          <div class="main-third-card__inner">
            <div class="main-third-card__inner__header">
              <h3>Mahogany Special Edition</h3>
              <p>Pledge $200 or more</p>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
              to our Backer member list. Shipping is included.          
            </p>
            <div class="main-third-card__inner__footer">
              <p>
                <span>0</span> left
              </p>
              <fill-button>Select Reward</fill-button>
            </div>
          </div>
        </div>
      </div>
    `

    const innerCard = this.querySelectorAll('.main-third-card__inner');
    innerCard.forEach((inner) => {
      const remain = inner.querySelector('.main-third-card__inner__footer > p > span');
      const button = inner.querySelector('fill-button');
      if (remain.innerText === '0') {
        inner.classList.add('o-half');
        button.setText('Out of Stock');
        button.setIsDisabled(true);
      } else {
        button.addEventListener('click', () => {
          const mainModal = document.createElement('main-modal');
          this.after(mainModal);
        })
      }
    })
  }
}

customElements.define('main-third-card', MainThirdCard);
