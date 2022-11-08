import Modal from "react-modal";
import Box from "@mui/material/Box";
import {Form} from "../../pages/Produto/styled";
import { useEffect } from "react";
import produtoService from "../../services/requests/produtoService";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 425,
    borderRadius: 10,
    bgcolor: "background.paper",
    border: "2px solid #5c0d76",
    boxShadow: "10px 10px 10px #5c0d76",
    p: 4,
  };
export function ModalEdit({
    modalEdit, closeModalEdit,setDescricao, setNome, setProductImage,setQuantidadeEstoque,setValorUnitario,
    nome, quantidadeEstoque, valorUnitario, descricao,productImage, idSelected, handleEditProduct
}){

useEffect(()=>{
    if(idSelected){
    produtoService.getProductById(idSelected)
    .then(
        
        (response) => {
        setNome(response.data.nome)
        setDescricao(response.data.descricao)
        setQuantidadeEstoque(response.data.quantidadeEstoque)
        setValorUnitario(response.data.valorUnitario)
        setProductImage(response.data.productImage)

        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });}
},[idSelected]);


console.log(idSelected);

return(
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
      <li>
        <p>Nome:</p>
        <input
          onChange={(e) => setNome(e.target.value)}
          required
          value={nome}
        ></input>
      </li>
      <li>
        <p>Descrição:</p>
        <input
          onChange={(e) => setDescricao(e.target.value)}
          required
          value={descricao}
        ></input>
      </li>
      <li>
        <p>Quantidade de estoque:</p>
        <input
          onChange={(e) =>
            setQuantidadeEstoque(parseInt(e.target.value))
          }
          required
          value={quantidadeEstoque}
        ></input>
      </li>
      <li>
        <p>Valor por unidade:</p>
        <input
          onChange={(e) =>
            setValorUnitario(parseFloat(e.target.value))
          }
          required
          value={valorUnitario}
        ></input>
      </li>
      <li>
        <p>Imagem:</p>
        <input
          className="inputImage"
          onChange={(e) =>
            setProductImage(e.target.files[0])
          }
          type="file"
          id="file"
          name="file"
          multiple
        />{" "}
      </li>
      <center className="buttonRegister">
        <button 
         onClick={() => handleEditProduct(idSelected) }
        >
          Editar
        </button>
      </center>
    </ul>
  </Form>
  <center>
    <button
      style={{
        color: "white",
        padding: "7px",
        backgroundColor: "#5c0d76",
        border: "none",
        borderRadius: 5,
      }}
      className="buttonClose"
      onClick={closeModalEdit}
    >
      Fechar
    </button>
  </center>
</Box>
</Modal>
);
    }