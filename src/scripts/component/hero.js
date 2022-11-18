/* eslint-disable indent */
class Hero extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
        <div class="hero-title">
          <h1>Restaurant Katalog Apps</h1>
          <p>Website pembantu untuk anda yang mencari restaurant terbaik!</p>
        </div>
        </div>
        `;
    }
}

customElements.define('hero-bar', Hero);
