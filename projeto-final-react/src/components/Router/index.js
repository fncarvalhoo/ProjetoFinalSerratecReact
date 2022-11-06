import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../header/index.js";
import { Cliente } from "../../pages/Cliente/index.js";
import { Produto } from "../../pages/Produto/index.js";
import { Home } from "../../pages/Home/index.js";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/Sobre" element={<Header />} />
    </Routes>
  );
}
