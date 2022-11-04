import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import produtoService from "../../services/requests/produtoService";

export function Home() {
  const [clientes, setClients] = useState([]);

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

  const [produtos, setProtudos] = useState([]);

  useEffect(() => {
    produtoService
      .getProdutos()
      .then((response) => {
        console.log(response.data);
        setProtudos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>response.data</h1>
    </div>
  );
}
