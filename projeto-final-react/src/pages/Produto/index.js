import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import { Insertproducts, Form, Container, Content } from "../../pages/Produto/styled.js";
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
  height: 425,
  borderRadius:10,
  bgcolor: "background.paper",
  border: "2px solid #5c0d76",
  boxShadow: "10px 10px 10px #5c0d76",
  p: 4,
};

export function Produto() {
  const [produto, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [valorUnitario, setValorUnitario] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [productImage, setProductImage] = useState();
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  function openModalInsert() {
    setModalInsert(true);
  }

  function closeModalInsert() {
    setModalInsert(false);
  }

  function openModalEdit() {
    setModalEdit(true);
  }

  function closeModalEdit() {
    setModalEdit(false);
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
  

  //Get by id
  // useEffect(() => {
  //   produtoService
  //     .getProductById(id)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProdutos(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


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

  function handleEditProduct(event, id){
    event.preventDefault();
    const dado = {
      nome: nome,
      valorUnitario: valorUnitario,
      descricao: descricao,
      quantidadeEstoque: quantidadeEstoque ,
      categoria: {
        id: 1
    }
  }

    produtoService.editProduct(id, dado, productImage)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    refreshPage();
  }
  
  function handleGetProductById(id) {
    produtoService.getProductById(id)
    .then((response) => {
      refreshPage();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
    <div>
    <Container>
      <Header />
      <div>
        <Insertproducts>
          <h1>Catálogo de produtos</h1>
          <button onClick={openModalInsert}>Inserir produto</button>
        </Insertproducts>
        <Modal
              isOpen={modalInsert}
              onRequestClose={closeModalInsert}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
           >
           <Box sx={style}>
            <Form>
              <ul>
               <li><p>Nome:</p><input onChange={(e) => setNome(e.target.value)}
                required
                value={nome}
                ></input></li>
                 <li><p>Descrição:</p><input onChange={(e) => setDescricao(e.target.value)}
                required
                value={descricao}
                ></input></li> 
                 <li><p>Quantidade de estoque:</p><input onChange={(e) => setQuantidadeEstoque(e.target.value)}
                required
                value={quantidadeEstoque}
                ></input></li>  
                <li><p>Valor por unidade:</p><input onChange={(e) => setValorUnitario(e.target.value)}
                required
                value={valorUnitario}
                ></input></li>  
                <li><p>Imagem:</p><input className="inputImage" onChange={(e) => setProductImage(e.target.files[0])} type="file" id="file" name="file" multiple /> </li>
                <center className="buttonRegister">
                <button onClick={handleRegisterProduct}>Cadastrar</button>
                </center>
              </ul>
            </Form>
            <center>
              <button style={{color:"white", padding:"7px",backgroundColor:"#5c0d76", border: "none", borderRadius:5}} className="buttonClose" onClick={closeModalInsert}>Fechar</button>
            </center>
              
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
              <div className="botao"> 
              <button onClick={openModalEdit}>editar</button>
              <Modal
              isOpen={modalEdit}
              onRequestClose={closeModalEdit}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
               >
                <Box sx={style}>
                <Form>
                <ul>
               <li><p>Nome:</p><input onChange={(e) => setNome(e.target.value)}
                required
                value={nome}
                ></input></li>
                 <li><p>Descrição:</p><input onChange={(e) => setDescricao(e.target.value)}
                required
                value={descricao}
                ></input></li> 
                 <li><p>Quantidade de estoque:</p><input onChange={(e) => setQuantidadeEstoque(parseInt(e.target.value))}
                required
                value={quantidadeEstoque}
                ></input></li>  
                <li><p>Valor por unidade:</p><input onChange={(e) => setValorUnitario(parseFloat(e.target.value))}
                required
                value={valorUnitario}
                ></input></li>  
                <li><p>Imagem:</p><input className="inputImage" onChange={(e) => setProductImage(e.target.files[0])} type="file" id="file" name="file" multiple /> </li>
                <center className="buttonRegister">
                <button onClick={() =>handleEditProduct(res.id)}>Editar</button>
                </center>
              </ul>
            </Form>  
                <center>
                <button style={{color:"white", padding:"7px",backgroundColor:"#5c0d76", border: "none", borderRadius:5}} className="buttonClose" onClick={closeModalEdit}>Fechar</button>
                </center>
                </Box>
              </Modal>
              <button onClick={() => handleDeleteProduct(res.id)}>
                deletar
              </button> 
              </div>  
            </Content>
          </div>
        );
      })}
    </Container>
    <Footer/>
    </div>
  );
}

