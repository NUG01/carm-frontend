import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
    {/* // </React.StrictMode> */}
  </I18nextProvider>
);
