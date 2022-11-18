import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

/* eslint-disable indent */
const Restaurant = {
    async render() {
      return `
      <div class="content">
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
      document.querySelector('subjudul-bar').style.removeProperty('display');

      const restaurant = await RestaurantSource.restaurantList();
      const restaurantContainer = document.querySelector('#restaurants');
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
      });
    },
};

export default Restaurant;
