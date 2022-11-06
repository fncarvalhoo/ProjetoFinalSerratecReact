import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import { Header } from "../../components/header/index";
import { Container } from "../../pages/Cliente/styled.js";

export function Cliente() {
  const [cliente, setClients] = useState([]);

  useEffect(() => {
    clienteService
      .getClients()
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Header />
      {cliente.map((res, index) => {
        console.log("dadadadada", res.endereco.cep);
        return (
          <div className="Clientes" key={index}>
            <span id="cliente">{res.id}</span>
            <span id="cliente">{res.nomeCompleto}</span>
            <span id="cliente">{res.nomeUsuario}</span>
            <span id="cliente">{res.email}</span>
            <span id="cliente">{res.telefone}</span>
            <span id="cliente">{res.cpf}</span>
            <span id="cliente">{res.endereco[0].cep}</span>
            <span id="cliente">{res.endereco[0].logradouro}</span>
            <span id="cliente">{res.endereco[0].numero}</span>
            <span id="cliente">{res.endereco[0].complemento}</span>
            <span id="cliente">{res.endereco[0].bairro}</span>
            <span id="cliente">{res.endereco[0].localidade}</span>
            <span id="cliente">{res.endereco[0].uf}</span>
            <span id="cliente">{res.pedido[0].dataPedido}</span>
            <span id="cliente">{res.pedido[0].status}</span>
            <span id="cliente">{res.pedido[0].id}</span>
          </div>
        );
      })}
    </Container>
  );
}
