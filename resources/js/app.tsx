import React from "react";
import { InertiaApp } from "@inertiajs/inertia-react";

const App = () => {
  const el = document.getElementById("app");

  return (
    <React.StrictMode>
      <InertiaApp
        initialPage={JSON.parse(el!.dataset.page!)}
        resolveComponent={(name: string) => import(`./Pages/${name}`).then((module) => module.default)} initialComponent={undefined}      />
    </React.StrictMode>
  );
};

export default App;
