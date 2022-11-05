import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import { Header } from "../../components/header/index";

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
    <div>
      <Header />
      <h1>Cliente</h1>
      {
        cliente.map(res => {
            return(
            <>
                <span>{res.nome}</span>
            </>
            )
        })
      }
    </div>
  );
}
