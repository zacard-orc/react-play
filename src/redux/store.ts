import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';

const mkStore = () => {
  const store = createStore(rootReducer);
  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
};

export default mkStore();
