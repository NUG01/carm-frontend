import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  errorMessage: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
