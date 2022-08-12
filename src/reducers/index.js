import { combineReducers } from 'redux';
import abilities from './abilities';
import address from './address';
import blogPosts from './blogPosts';
import cart from './cart';
import categories from './categories';
import certificates from './certificates';
import contact from './contact';
import courses from './courses';
import favorites from './favorites';
import pressOffice from './pressOffice';
import purchases from './purchases';
import testimonials from './testimonials';
import user from './user';
import modal from './modal';

const reducers = combineReducers({
  abilities,
  address,
  blogPosts,
  cart,
  categories,
  certificates,
  contact,
  courses,
  favorites,
  modal,
  pressOffice,
  purchases,
  testimonials,
  user,
});

export default reducers;
