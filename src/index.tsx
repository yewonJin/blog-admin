import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";
import ReactQuery from "./provider/ReactQuery";
import ThemeProvider from "./provider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactQuery>
      <CookiesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </ReactQuery>
  </React.StrictMode>
);
