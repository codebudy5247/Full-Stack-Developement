import { configureStore } from '@reduxjs/toolkit';
import {useDispatch as useAppDispatch,useSelector as useAppSelector,TypedUseSelectorHook} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
// ----------------------------------------------------------------------

import { rootReducer } from './rootReducer';



const store = configureStore({
  reducer:rootReducer,
  devTools: true,

})

export { store };