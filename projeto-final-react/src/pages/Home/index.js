import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import categoriaService from "../../services/requests/categoriaService";
import pedidoService from "../../services/requests/pedidoService";
import produtoService from "../../services/requests/produtoService";
import { Header } from "../../components/header/index";


export function Home() {
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

  const [categoria, setCategories] = useState([]);

  useEffect(() => {
    categoriaService
      .getCategories()
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [pedido, setRequests] = useState([]);

  useEffect(() => {
    pedidoService
      .getRequests()
      .then((response) => {
        console.log(response.data);
        setRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [produtos, setProducts] = useState([]);

  useEffect(() => {
    produtoService
      .getProducts()
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Produtos</h1>
      {produtos.map((res, index) => {
        console.log("dadadadada", res.nome);
        return (
          <div className="Produtos" key={index}>
            <span id="produto">{res.imagemProduto}</span>
          </div>
        );
      })}
    </div>
  );
}
