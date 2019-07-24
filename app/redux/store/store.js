import { createStore } from 'redux';
import rootReducer from '../reducers';

// create store + allow redux devtools chrome extension to access store

const store = createStore(rootReducer, window.STATE_FROM_SERVER);

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

console.log('store state is', store.getState());

export default store;
