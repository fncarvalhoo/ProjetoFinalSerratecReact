import {api} from '../api/api';

const getProdutos = () => {
    return api.get(`produto`)
}

export default {
    getProdutos
}