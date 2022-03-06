class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  updateEl() {
    this.nav = this.querySelector('nav');
    this.navButton = this.querySelector('.app-bar > button');
    this.navButtonImg = this.querySelector('.app-bar > button > img');
    this.overlay = this.querySelector('overlay-el');
  }

  isMobileResolution() {
    return window.screen.width < 640;
  }

  updateNav() {
    if (this.isMobileResolution()) {
      this.hideNav();
    } else {
      this.showNav();
    }
  }

  addOverlay() {
    const overlay = document.createElement('overlay-el');
    overlay.addEventListener('click', () => {
      this.toggleNav();
    });
    if (!this.overlay && this.isMobileResolution()) {
      this.prepend(overlay);
    }
  }

  removeOverlay() {
    if (this.overlay) {
      this.removeChild(this.overlay);
    }
  }

  showNav() {
    const { nav, navButton, navButtonImg } = this;
    nav.classList.remove('hide');
    navButton.ariaLabel = 'hide navigation';
    navButtonImg.src = '../images/icon-close-menu.svg';
    this.addOverlay();
    this.updateEl();
  }

  hideNav() {
    const { nav, navButton, navButtonImg } = this;
    nav.classList.add('hide');
    navButton.ariaLabel = 'show navigation';
    navButtonImg.src = '../images/icon-hamburger.svg';
    this.removeOverlay();
    this.updateEl();
  }

  toggleNav() {
    const isOpen = !this.nav.classList.contains('hide');
    if (this.isMobileResolution() && isOpen) {
      this.hideNav();
    } else {
      this.showNav();
    }
  }

  render() {
    const styles = `
      <style>
        .app-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 30px;
          height: 80px;
          position: relative;
        }
        nav {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background: white;
          border-radius: 8px;
        }
        nav.hide {
          display: none;
        }

        .nav-item {
          padding: 25px 40px;
          font-weight: 500;
          position: relative;
          transition: all .2s ease-out;
        }
        .nav-item:active {
          opacity: .4
        }
        .nav-item:not(:last-child)::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          display: block;
          background: black;
          opacity: .2;
        }

        @media screen and (min-width: 640px) {
          .app-bar {
            margin: 0 80px;
          }
          .app-bar > button {
            display: none;
          }
          nav {
            position: static;
            width: unset;
            background: unset;
            flex-direction: row;
          }
          .nav-item {
            color: white;
            font-weight: 400;
            padding: 0 25px;
            font-size: .9rem;
          }
          .nav-item:hover {
            text-decoration: underline;
          }
          .nav-item:not(:last-child)::after {
            opacity: 0;
          }
        }

        @media screen and (min-width: 1280px) {
          .app-bar {
            margin: 0 100px;
          }
          .app-bar > .logo {
            margin-left: 65px;
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <div class="app-bar">
        <a class="logo">
          <img src="../images/logo.svg" alt=""/>
        </a>
        <button type="button" aria-label="show navigation">
          <img src="../images/icon-hamburger.svg" alt="" aria-hidden="true"/>
        </button>
        <nav>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Discover</a>
          <a href="#" class="nav-item">Get Started</a>
        </nav>
      </div>
    `

    this.updateEl();

    this.updateNav();
    window.addEventListener('resize', () => {
      this.updateNav();
    })

    this.navButton.addEventListener('click', () => {
      this.toggleNav();
    })
  }
}

customElements.define('app-bar', AppBar);