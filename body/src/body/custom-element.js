import render from './render';

class Body extends HTMLElement {
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
    console.log('🖼️ Body', ...args);
  }
}

export default Body;
