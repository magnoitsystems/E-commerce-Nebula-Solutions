import React from "react";
import { createRoot } from "react-dom/client";
import { InertiaApp } from "@inertiajs/inertia-react";

const el = document.getElementById("app");

createRoot(el!).render(
  <React.StrictMode>
    <InertiaApp
      initialPage={JSON.parse(el!.dataset.page!)}
      resolveComponent={(name: string) => import(`./Pages/${name}`).then((module) => module.default)} initialComponent={undefined}/>
  </React.StrictMode>
);
