import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import ContactReducer from '../features/contacts/contactSlice'

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  // whitelist: ["quotes"],
};


const rootReducer = combineReducers({
 contacts:ContactReducer
});

export { rootReducer };