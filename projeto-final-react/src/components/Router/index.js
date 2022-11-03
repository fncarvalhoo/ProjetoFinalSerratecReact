import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../header/index.js";

export function Router() {
  return (
    <Routes>
      <Route exact patch="/" element={<Header />}></Route>
      <Route exact path="/Parte1" element={<Header />}></Route>
      <Route exact path="/Parte2" element={<Header />}></Route>
      <Route exact path="/Sobre" element={<Header />}></Route>
    </Routes>
  );
}
