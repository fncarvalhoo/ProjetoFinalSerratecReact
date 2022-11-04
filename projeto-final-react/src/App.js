import { Header } from "../src/components/header/index.js";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../src/styles/global.js";
import { Home } from "./pages/Home/index.js";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
    </BrowserRouter>
  );
}
