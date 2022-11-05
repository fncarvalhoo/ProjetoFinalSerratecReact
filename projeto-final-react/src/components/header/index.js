import React from "react";

import { AreaHeader, Container } from "./styled.js";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AreaHeader>
      <Container>
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/areaCliente">Cliente</Link>
            </li>
            <li>
              <Link to="/dadaadaa">Parte2</Link>
            </li>
            <li>
              <Link to="/dadadadad">Sobre</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </AreaHeader>
  );
}
