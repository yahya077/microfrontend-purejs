/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement */
import render from './render';

class Header extends HTMLElement {
  connectedCallback() {
    this.log('connectedCallback', "args can be add here");
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.log('attributeChangedCallback', "args can be add here");
    this.render();
  }

  render() {
    this.innerHTML = render();
  }

  disconnectedCallback() {
    this.log('disconnected', "args can be add here");
  }

  log(...args) {
    console.log('🖼️ Header', ...args);
  }
}

export default Header;
