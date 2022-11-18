Feature('Liking Restaurant');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// skenario untuk mengecek bahwa belum ada restaurant favorite
Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('Anda belum punya restaurant favorite', '.favorite_notFound');
});

// skenario like retaurant dan unlike restaurant
Scenario('Liking then unliking A restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item__content', 10);

  // like a restaurant to be favorite
  I.waitForElement('#restaurants .restaurant-item-content__name a', 20);
  const firstRestaurant = locate('#restaurants .restaurant-item-content__name a').first();
  const firstrestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');

  // make sure liking retsurant is success
  const fisrtLikedRestaurant = locate('#restaurants .restaurant-item-content__name a').first();
  const likedRestaurantName = await I.grabTextFrom(fisrtLikedRestaurant);
  assert.strictEqual(firstrestaurantName, likedRestaurantName);

  // unlike the restaurant
  I.click(fisrtLikedRestaurant);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // make sure unlike is success
  I.amOnPage('/#/favorite');
  I.see('Anda belum punya restaurant favorite', '.favorite_notFound');
});
