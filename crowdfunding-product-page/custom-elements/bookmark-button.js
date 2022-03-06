class BookmarkButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  updateEl() {
    this.buttonEl = this.querySelector('.bookmark-button');
  }

  changeBookmarkState() {
    const isBookmarked = this.buttonEl.getAttribute('data-is-bookmarked') === 'true';
    if (isBookmarked) {
      this.buttonEl.setAttribute('data-is-bookmarked', 'false');
    } else {
      this.buttonEl.setAttribute('data-is-bookmarked', 'true');
    }
  }

  render() {
    const styles = `
      <style>
        .bookmark-button {
          display: flex;
          align-items: center;
          background: rgba(0,0,0,.04);
          border-radius: 28px;
          cursor: pointer;
          transition: all .4s ease-out;
        }
        .bookmark-text {
          display: none;
          color: var(--gray);
          font-weight: 700;
          padding: 0 25px 0 15px;
          transition: all .2s ease-out;
        }
        .bookmark-button:hover .bookmark-icon-circle {
          fill: var(--gray);
          transition: all .2s ease-out;
        }
        [data-is-bookmarked="true"] .bookmark-icon-circle {
          fill: var(--cyan);
        }
        [data-is-bookmarked="true"] .bookmark-icon-path {
          fill: white;
        }
        [data-is-bookmarked="true"] > .bookmark-text {
          color: var(--cyan);
        }
        [data-is-bookmarked="true"]:hover .bookmark-icon-circle {
          fill: var(--dark-cyan);
        }
        [data-is-bookmarked="true"]:hover > .bookmark-text {
          color: var(--dark-cyan);
        }
        .bookmark-button:active {
          opacity: .4
        }

        @media screen and (min-width: 640px) {
          .bookmark-text {
            display: unset;
          }
        }
      </style>
    `
    this.innerHTML = styles + `
      <button class="bookmark-button" data-is-bookmarked="false">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle class="bookmark-icon-circle" fill="#2F2F2F" cx="28" cy="28" r="28"/>
            <path class="bookmark-icon-path" fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
          </g>
        </svg>
        <span class="bookmark-text">Bookmark</span>
      </button>
    `

    this.updateEl();
    this.buttonEl.addEventListener('click', () => {this.changeBookmarkState()});
  }
}

customElements.define('bookmark-button', BookmarkButton)
