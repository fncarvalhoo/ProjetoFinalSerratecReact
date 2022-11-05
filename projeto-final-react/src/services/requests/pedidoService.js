import {api} from '../api/api';

const getRequests = () => {
    return api.get(`pedidos`)
}

export default {
    getRequests
}