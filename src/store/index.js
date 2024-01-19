import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import messagesReducer from "./messages";

const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messagesReducer,
  },
});

export default store;
