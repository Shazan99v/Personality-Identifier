import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { HelmetProvider } from "react-helmet-async";

AOS.init({
  duration: 900,
  once: true,
});


ReactDOM.createRoot(document.getElementById("root")).render(
   <HelmetProvider>
     <App />
   </HelmetProvider>
);
