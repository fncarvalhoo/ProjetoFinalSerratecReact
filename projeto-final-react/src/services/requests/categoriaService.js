import {api} from '../api/api';

const getCategories = () => {
    return api.get(`categoria`)
}

export default {
    getCategories
}