import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./app";

const el = document.getElementById("app");

createRoot(el!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
