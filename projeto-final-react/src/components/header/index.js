import React from "react";

import { Navbar, Container } from "./styled.js";
import { Link } from "react-router-dom";
import logo from '../../utils/imagens/carrinho.png'

export function Header() {
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <img src={logo} alt="Produtos"/>
        </Link>
          <ul>
            <li>
              <Link className="linkref" to="/">Home</Link>
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
      </Container>
    </Navbar>
  );
}
