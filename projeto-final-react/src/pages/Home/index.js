import { useState, useEffect } from "react";
import clienteService from "../../services/requests/clienteService";


export function Home() {
    const [clientes, setClients] = useState([]);

    useEffect(() => {
        clienteService.getClients().then(response => {
            console.log(response.data)
            setClients(response.data);
        }).catch(error => {
            console.log(error)
        })
    },[])

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}