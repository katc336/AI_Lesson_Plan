import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";
import HomePage from "./components/HomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
        <Route path ="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
