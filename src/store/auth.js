import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthenticated(state, action) {
      state.authenticated = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
