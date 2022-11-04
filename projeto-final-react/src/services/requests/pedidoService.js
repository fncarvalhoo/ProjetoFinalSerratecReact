import {api} from '../api/api';

const getRequests = () => {
    return api.get(`pedido`)
}

export default {
    getRequests
}