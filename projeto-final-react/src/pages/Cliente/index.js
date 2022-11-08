import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import { Container, Content, Dados } from "../../pages/Cliente/styled.js";
import Modal from "react-modal";

import Box from "@mui/material/Box";

Modal.setAppElement("#root");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
};

export function Cliente() {
  const [clientes, setClients] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [status, setStatus] = useState("");
  const [valorLiquido, setValorLiquido] = useState(0);
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(index) {
    const cliente = clientes.at(index);
    setNomeCompleto(cliente.nomeCompleto);
    setNomeUsuario(cliente.nomeUsuario);
    setCep(cliente.endereco[0].cep);

    console.log(cliente);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    <div>
    <Container>
      <Header />
      <Content>
        <span className="conteudo">Nome</span>
        <span className="conteudo">Usuário</span>
        <span className="conteudo">E-mail</span>
        <span className="conteudo">Telefone</span>
        <span className="conteudo">CPF</span>
        <span className="conteudo">CEP</span>
        <span className="conteudo">MAIS</span>
      </Content>
      <div className="divisao"></div>
      {clientes.map((res, index) => {
        return (
          <div className="Clientes" key={index}>
            <Content>
              <span id="cliente">{res.nomeCompleto}</span>
              <span id="cliente">{res.nomeUsuario}</span>
              <span id="cliente">{res.email}</span>
              <span id="cliente">{res.telefone}</span>
              <span id="cliente">{res.cpf}</span>
              <span id="cliente">{res.endereco[0].cep}</span>
              <button onClick={() => openModal(index)}>Open</button>
            </Content>
          </div>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <Box sx={style}>
          {clientes.map((res, index) => {
            return (
              <div className="Complete" key={index}>
                <Dados>
                  <div>
                    <h2>Informações completas do cliente</h2>
                  </div>
                  <ul>
                    <li>
                      {/* Nome Completo: <span id="dados">{res.nomeCompleto}</span> */}
                    </li>
                    <li>
                      Nome de usuário: <span id="dados">{res.nomeUsuario}</span>
                    </li>
                    <li>
                      E-mail: <span id="dados">{res.email}</span>
                    </li>
                    <li>
                      Telefone: <span id="dados">{res.telefone}</span>
                    </li>
                    <li>
                      CPF: <span id="dados">{res.cpf}</span>
                    </li>
                    <li>
                      CEP: <span id="dados">{res.endereco[0].cep}</span>
                    </li>
                    <li>
                      Rua: <span id="dados">{res.endereco[0].logradouro}</span>
                    </li>
                    <li>
                      Número<span id="dados">{res.endereco[0].numero}</span>
                    </li>
                    <li>
                      Complemento:{" "}
                      <span id="dados">{res.endereco[0].complemento}</span>
                    </li>
                    <li>
                      Bairro: <span id="dados">{res.endereco[0].bairro}</span>
                    </li>
                    <li>
                      Cidade:{" "}
                      <span id="dados">{res.endereco[0].localidade}</span>
                    </li>
                    <li>
                      UF: <span id="dados">{res.endereco[0].uf}</span>
                    </li>
                    <li>
                      Data pedido:{" "}
                      <span id="dados">{res.pedido[0].dataPedido}</span>
                    </li>
                    <li>
                      Status pedido:
                      <span id="dados">{res.pedido[0].status}</span>
                    </li>
                    <li>
                      Valor:
                      <span id="dados">
                        R${res.pedido[0].itemPedido[0].valorLiquido}
                      </span>
                    </li>
                    <li>
                      Nome produto:
                      <span id="dados">
                        {res.pedido[0].itemPedido[0].produto.nome}
                      </span>
                    </li>
                    <li>
                      Descrição produto:
                      <span id="dados">
                        {res.pedido[0].itemPedido[0].produto.descricao}
                      </span>
                    </li>
                  </ul>
                  <button onClick={closeModal}>Close</button>
                </Dados>
              </div>
            );
          })}
        </Box>
      </Modal>
    </Container>
    <Footer/>
    </div>
  );
}
