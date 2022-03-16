import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as API from "./contactAPI";
const axios = require("axios");

export const fetchContactList = createAsyncThunk("contact/loading", async() =>
  axios
    .get("https://rapid-api5247.herokuapp.com/api/contacts")
    .then((response: any) => response.data)
    .catch((err: any) => err)
 );

const contactInitialState = {
  contactList: {
    status: "idle",
    data: [],
    err: {},
  },
};

const slice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {},
  extraReducers: {
    [fetchContactList.pending.type]: (state, action) => {
      state.contactList = {
        status: "loading",
        data: [],
        err: {},
      };
    },
    [fetchContactList.fulfilled.type]: (state, action) => {
      state.contactList = {
        status: "loading",
        data: action.payload,
        err: {},
      };
    },
    [fetchContactList.rejected.type]: (state, action) => {
      state.contactList = {
        status: "idle",
        data: [],
        err: action.payload,
      };
    },
  },
});

export default slice.reducer;
