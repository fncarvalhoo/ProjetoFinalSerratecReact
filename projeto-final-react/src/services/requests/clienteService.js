import {api} from '../api/api';

const getClients = () => {
    return api.get(`cliente`)
}

export default {
    getClients
}