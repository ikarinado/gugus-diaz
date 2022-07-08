import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartContext from "./CartContext";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyeFnWgOopa5j6q7wv_P-0rfweh6_XjKg",
  authDomain: "gugus-ecommerce.firebaseapp.com",
  projectId: "gugus-ecommerce",
  storageBucket: "gugus-ecommerce.appspot.com",
  messagingSenderId: "274114704621",
  appId: "1:274114704621:web:e253c3719cf9b8435848e4",
  measurementId: "G-FDXX7P00GS"
};
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContext>
        <App />
      </CartContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
