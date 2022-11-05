import {api} from '../api/api';

const getClients = () => {
    return api.get(`cliente`)
}

const postClients = (clients) => {
    return api.post(`cliente`, clients)
}

export default {
    getClients,
    postClients
}