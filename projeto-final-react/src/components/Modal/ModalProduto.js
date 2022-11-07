import React, { forwardRef, useImperativeHandle, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { borderRadius } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  bgcolor: "background.paper",
  border: "2px solid #5c0d76",
  boxShadow: 24,
  p: 4,
};

export const ModalProduto = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [valorUnitario, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [quantidadeEstoque, setquantidadeEstoque] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      handleClickOpen: handleClickOpen,
      setProduto: setProduto,
      actionRef: actionRef,
    };
  });

  const cadastrarProduto = () => {
    const produto = {
      nome: nome,
      valor: valorUnitario,
      descricao: descricao,
      quantidadeEstoque: quantidadeEstoque,
    };

    fetch("http://localhost:8080/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => res.json())
      .then((res) => {
        props.func(res);
        handleClose();
      });
  };

  const editarProduto = () => {
    const produto = {
      nome: nome,
      valor: valorUnitario,
      descricao:descricao,
      quantidadeEstoque: quantidadeEstoque,
    };

    fetch(`http://localhost:8080/produtos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => res.json())
      .then((res) => {
        props.func(res);
        handleClose();
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setProduto = (produto) => {
    setId(produto.id);
    setNome(produto.nome);
    setValor(produto.valorUnitario);
    setDescricao(produto.descricao);
    setquantidadeEstoque(produto.quantidadeEstoque);
  };

  const actionRef = (action) => {
    console.log(action)
    setAction(action)
  }

  const btnAction = () => {
    if(action === "editar") {
      editarProduto()
    }

    if(action === "cadastrar") {
      cadastrarProduto()
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h2 id="modal-modal-titlee"></h2>
          <div id="modal-modal-description">
            <p width="100%">
              <label style={{ width: "20%" }} htmlFor="idProdut">
                Id:{" "}
              </label>
              <input
                style={{ width: "100%", backgroundColor: "#5c0d76", borderRadius:"10px" }}
                disabled
                id="idProduto"
                type="number"
                value={id}
                onChange={(event) => setId(parseInt(event.target.value))}
              />
            </p>
            <p>
              <label style={{ width: "20%",  }} htmlFor="nomeProduto">
                Nome:{" "}
              </label>
              <input
                style={{ width: "100%", backgroundColor: "#5c0d76", borderRadius:"10px", color:"white", textIndent:"5px" }}
                id="nomeProduto"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </p>
            <p>
              <label style={{ width: "20%" }} htmlFor="valorProduto">
                Valor:{" "}
              </label>
              <input
                style={{ width: "100%", backgroundColor: "#5c0d76", borderRadius:"10px", color:"white", textIndent:"5px" }}
                id="valorProduto"
                type="number"
                value={valorUnitario}
                onChange={(event) => setValor(parseFloat(event.target.value))}
              />
            </p>
            <p>
              <label style={{ width: "20%" }} htmlFor="descricaoProduto">
                Descrição:{" "}
              </label>
              <input
                style={{ width: "100%", backgroundColor: "#5c0d76", borderRadius:"10px", color:"white", textIndent:"5px" }}
                id="descricaoProduto"
                type="text"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </p>
            <p>
              <label
                style={{ width: "20%" }}
                htmlFor="quantidadeEstoqueProduto"
              >
                Quantidade em estoque:{" "}
              </label>
              <input
                style={{width: "100%", backgroundColor: "#5c0d76", borderRadius:"10px", color:"white", textIndent:"5px" }}
                id="quantidadeEstoqueProduto"
                type="number"
                value={quantidadeEstoque}
                onChange={(event) => setquantidadeEstoque(parseInt(event.target.value))}
              />
            </p>
          </div>
          <button style={{height:"20px", width: "50%", backgroundColor: "#5c0d76", borderRadius:"10px", color:"white", border:"none", marginLeft:"25%", marginTop:"10px" }} onClick={btnAction}>
            Salvar
          </button>
        </Typography>
      </Box>
    </Modal>
  );
});
