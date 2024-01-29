import React, { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter basename="/FKCsoccer">
      <App />
    </BrowserRouter>
  </StrictMode>
);
