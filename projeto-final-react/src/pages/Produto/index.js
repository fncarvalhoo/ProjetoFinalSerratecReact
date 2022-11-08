import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService";
import { Header } from "../../components/header/index";
import { Insertproducts, Form, Container, Content, Dados } from "../../pages/Produto/styled.js";
import Modal from "react-modal";
import Box from "@mui/material/Box";
import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

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

  function handleRegisterProduct(event) {
    event.preventDefault();
    const data = {
      nome: nome,
      valorUnitario: valorUnitario,
      descricao: descricao,
      quantidadeEstoque: quantidadeEstoque ,
      categoria: {
        id: 1
    }
  }
    produtoService.postImage(data, productImage )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    refreshPage();
  }

  

  function handleDeleteProduct(id) {
    produtoService.deleteProduct(id)
    .then((response) => {
      refreshPage();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  }
  return (
    <Container>
      <Header />
      <div>
        <Insertproducts>
          <h1>Catálogo de produtos</h1>
          <button onClick={openModal}>Inserir produto</button>
        </Insertproducts>
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
               <li><input onChange={(e) => setNome(e.target.value)} placeholder="Nome"
                required
                value={nome}
                ></input></li>
                 <li><input onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição"
                required
                value={descricao}
                ></input></li> 
                 <li><input onChange={(e) => setQuantidadeEstoque(e.target.value)} placeholder="Quantidade de Estoque"
                required
                value={quantidadeEstoque}
                ></input></li>  
                <li><input onChange={(e) => setValorUnitario(e.target.value)} placeholder="Valor por Unidade"
                required
                value={valorUnitario}
                ></input></li>  
                <li><input onChange={(e) => setProductImage(e.target.files[0])} type="file" id="file" name="file" multiple /> </li>
                <button onClick={handleRegisterProduct}>Submit</button>
              </ul>
            </Form>
              <button onClick={closeModal}>Close</button>
           </Box>


        </Modal>
      
      </div>

      <Content>
        <span className="contudo">Imagem</span>
        <span className="conteudo">Produto</span>
        <span className="conteudo">Descrição</span>
        <span className="conteudo">Quant Estoque</span>
        <span className="conteudo">Valor</span>
        <span className="conteudo">Categoria</span>
        <span className="conteudo">Opções</span>
      </Content>
      <div className="divisao"></div>
      {produto.map((res, index) => {
        return (
          <div className="Clientes" key={index}>
            <Content>
              <div><img src={`data:image/png;base64,${res.imagemProduto}`}/></div>
              <span id="produto">{res.nome}</span>
              <span id="produto">{res.descricao}</span>
              <span id="produto">{res.quantidadeEstoque}</span>
              <span id="produto">{res.valorUnitario}</span>
              <span id="produto">{res.categoria.nome}</span>
              <div className="botao"> <button>editar</button>
              <button onClick={() => handleDeleteProduct(res.id)}>
                deletar
              </button> 
              </div>  
            </Content>
          </div>
        );
      })}
    </Container>
  );
}

