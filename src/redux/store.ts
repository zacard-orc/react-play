import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const mkStore = () => {
  const store = createStore(rootReducer, composedEnhancer);
  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
};

export default mkStore();
