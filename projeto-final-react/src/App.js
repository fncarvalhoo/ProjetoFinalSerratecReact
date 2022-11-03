import { Header } from "../src/components/header/index.js";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../src/styles/global.js";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
}
