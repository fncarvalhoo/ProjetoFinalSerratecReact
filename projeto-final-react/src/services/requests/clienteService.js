import {api} from '../api/api';

const getClients = () => {
    return api.get(`cliente`)
}

// clientes = {
//     email : '',
//     nomeUsuario: '',
//     nomeCompleto: '',
//     senha: '',
//     cpf: '',
//     telefone:'',
//     dataNasc: ''
// }

// const postClients = (client) => {
//     return api.post('clientes', client)
// }

export default {
    getClients
}