import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../header/index.js";
import { Cliente } from "../../pages/Cliente/index.js";
import { Home } from "../../pages/Home/index.js";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/areaCliente" element={<Cliente />} />
      <Route path="/Parte2" element={<Header />} />
      <Route path="/Sobre" element={<Header />} />
    </Routes>
  );
}
