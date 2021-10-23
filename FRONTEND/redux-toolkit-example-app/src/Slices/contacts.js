import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ContactData from "../Services/contact-api";

const initialState = [];

//create the thunk
//createAsyncThunk accepts three parameters: a string action type value,
//a payloadCreator callback, and an options object.

export const createContact = createAsyncThunk(
  "contacts/create",
  async ({ name, email, phone, type }) => {
    const res = await ContactData.create({ name, email, phone, type });
    return res.data;
  }
);

export const retrieveContacts = createAsyncThunk(
  "contacts/retrieve",
  async () => {
    const res = await ContactData.getAll();
    return res.data;
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async ({ id, data }) => {
    const res = await ContactData.update(id, data);
    return res.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async ({ id }) => {
    await ContactData.remove(id);
    return { id };
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [createContact.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveContacts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateContact.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = contactSlice;
export default reducer;
