import {api} from '../api/api';

const getProducts = () => {
    return api.get(`produto`)
}

export default {
    getProducts
}