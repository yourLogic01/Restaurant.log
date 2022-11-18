/* eslint-disable indent */
class Subjudul extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
        this.innerHTML = `
        <h2 class="sub-judul">Daftar restaurant</h2>
        <p class="detail-sj">Menampilkan beberapa detail terkait restaurant di seluruh Indonesia</p>
        `;
    }
}

customElements.define('subjudul-bar', Subjudul);
