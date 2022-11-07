import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService";
import { Header } from "../../components/header/index";
import { Form, Container, Content, Dados } from "../../pages/Produto/styled.js";
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

export function Produto() {
  const [produto, setProdutos] = useState([]);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [valorUnitario, setValorUnitario] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [productImage, setProductImage] = useState();




  console.log("imageeeem", productImage);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <div> 
        <button onClick={openModal}>Inserir</button>
        <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
           >
           <Box sx={style}>
            <Form>
              <ul>
               <li><textarea placeholder="Nome"
                required
                value={nome}
                ></textarea></li> 
                <li><input onChange={(e) => setProductImage(e.target.files[0])} type="file" id="file" name="file" multiple /> </li>
                <button>Submit</button>
              </ul>
            </Form>
              <button onClick={closeModal}>Close</button>
           </Box>


        </Modal>
      
      </div>


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

