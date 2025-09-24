import React from "react";
import './index.css';
import { createRoot } from "react-dom/client";
import { createInertiaApp } from '@inertiajs/react';
import { BrowserRouter } from "react-router-dom";

createInertiaApp({
  resolve: name => import(`./Pages/${name}.tsx`).then(module => module.default),
  setup({ el, App, props }) {
    createRoot(el).render(
      <React.StrictMode>
        <BrowserRouter>
          <App {...props} />
        </BrowserRouter>
      </React.StrictMode>
    );
  },
});
