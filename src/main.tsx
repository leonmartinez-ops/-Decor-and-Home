import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const isCatalogHost =
  typeof window !== "undefined" &&
  window.location.hostname.toLowerCase() === "catalogo.decorandhome.com.mx";

if (isCatalogHost) {
  // Netlify may serve the SPA shell for a domain alias. Force the catalog
  // document on the catalog hostname so the main Decor & Home site stays intact.
  window.location.replace("/catalogo/index.html");
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode><App /></React.StrictMode>
  );
}
