import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./Slices/contacts";

const reducer = {
  contacts: contactReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
