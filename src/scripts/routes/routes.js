/* eslint-disable indent */
/* eslint-disable spaced-comment */
import Detail from '../views/pages/details';
import Restaurant from '../views/pages/restaurant';
import Favorite from '../views/pages/favorite';

const routes = {
    '/': Restaurant, //default page
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;
