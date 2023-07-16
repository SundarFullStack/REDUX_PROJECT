import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "./Components/Context/Cart.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Router>
);

reportWebVitals();
