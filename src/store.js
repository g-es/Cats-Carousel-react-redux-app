/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import { loadGifs } from './actions/actions'

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   )
// }

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(loadGifs());

export default store;