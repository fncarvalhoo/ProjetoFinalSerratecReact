import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "../src/styles/global.js";
import { Router } from "./components/Router/index.js";
import { Home } from "./pages/Home/index.js";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
