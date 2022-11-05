import { api } from "../api/api";

const getClients = () => {
  return api.get(`clientes`);
};

const postClients = (clients) => {
  return api.post(`cliente`, clients);
};

export default {
  getClients,
  postClients,
};
