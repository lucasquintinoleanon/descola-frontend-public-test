import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { loadState } from './utils/statePersistence';
import { types } from './reducers/user';
import { initialState as initialStateAddress } from './reducers/address';
import { initialState as initialStateCertificates } from './reducers/certificates';
import { initialState as initialStateFavorites } from './reducers/favorites';
import { initialState as initialStatePurchases } from './reducers/purchases';
import { initialState as initialStateCourses } from './reducers/courses';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const user = loadState('user');
const cart = loadState('cart');
const modal = loadState('modal');


const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    return reducers({
      ...state,
      address: initialStateAddress,
      certificates: initialStateCertificates,
      // courses: { ...state.courses,
      //   purchased: {
      //     byId: {},
      //     allIds: [],
      //     keepWatching: []
      //   }
      // },
      courses: initialStateCourses,
      favorites: initialStateFavorites,
      purchases: initialStatePurchases
    }, action);
  }
  return reducers(state, action);
};

const store = createStore(
  rootReducer,
  { user, cart, modal },
  compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);
console.log('store', store)

sagaMiddleware.run(rootSaga);

export default store;
