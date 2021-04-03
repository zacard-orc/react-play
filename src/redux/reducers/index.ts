import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reduce
import opsCount from './opsCount';

const rootPersistConfig = {
  key: 'root',
  storage,
  // blacklist: ['opsCount'], // 这里填写reducer名字
};

// const rootReducer = combineReducers({
//   opsCount: persistReducer(authPersistConfig, authReducer),
//   other: otherReducer,
// });

const rootReducer = combineReducers({
  opsCount,
});

export default persistReducer(rootPersistConfig, rootReducer);
