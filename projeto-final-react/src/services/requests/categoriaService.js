import {api} from '../api/api';

const getCategories = () => {
    return api.get(`categorias`)
}

export default {
    getCategories
}