import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService";
import { Header } from "../../components/header/index";
import { Container, Content, Dados } from "../../pages/Produto/styled.js";

export function Produto() {
  const [produto, setProdutos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    produtoService
      .getProducts()
      .then((response) => {
        console.log(response.data);
        setProdutos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <span className="contudo">Id</span>
        <span className="conteudo">Produto</span>
        <span className="conteudo">Descrição</span>
        <span className="conteudo">Quant Estoque</span>
        <span className="conteudo">Valor</span>
        <span className="conteudo">Categoria</span>
        <span className="conteudo">MAIS</span>
      </Content>
      <div className="divisao"></div>
      {produto.map((res, index) => {
        return (
          <div className="Clientes" key={index}>
            <Content>
              <span id="produto">{res.id}</span>
              <span id="produto">{res.nome}</span>
              <span id="produto">{res.descricao}</span>
              <span id="produto">{res.quantidadeEstoque}</span>
              <span id="produto">{res.valorUnitario}</span>
              <span id="produto">{res.categoria.nome}</span>
              <button onClick={() => produtoService.deleteProduct(res.id)}>
                delete
              </button>
            </Content>
          </div>
        );
      })}
    </Container>
  );
}
