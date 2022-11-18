import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

/* eslint-disable indent */
const Favorite = {
    async render() {
        return `
            <div class="content">
            <h2 class="sub-judul favorite">Daftar restaurant favorite anda</h2>
            <div id="restaurants" class="restaurants">
        
            </div>
            <div id="notFound" class="notFound"></div>
            </div>
        `;
    },

    async afterRender() {
        document.querySelector('subjudul-bar').style.display = 'none';
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        const restaurantNotFoundContainer = document.querySelector('#notFound');

        if (restaurants.length < 1) {
            restaurantNotFoundContainer.innerHTML = `<div class="favorite_notFound">
            <h2>Anda belum punya restaurant favorite.</h2>
            </div>`;
        } else {
            restaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            });
        }
    },
};

export default Favorite;
