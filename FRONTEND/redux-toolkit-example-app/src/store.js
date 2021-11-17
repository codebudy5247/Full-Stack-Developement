import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import contactReducer from "./Slices/contacts";
import logger from "redux-logger";
const reducer = combineReducers({
  contactReducer,
})


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: reducer,
  devTools: true,
});

export default store;
