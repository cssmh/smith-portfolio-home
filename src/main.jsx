import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <ScrollToTop />
  </StrictMode>
);
