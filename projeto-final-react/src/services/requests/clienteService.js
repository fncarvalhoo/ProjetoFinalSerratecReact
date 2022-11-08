import { api } from "../api/api";

const getClients = () => {
  return api.get(`clientes`);
};

const getClientsById = (Id) => {
  return api.get(`clientes/${Id}`);
};

const postClients = (clients) => {
  return api.post(`cliente`, clients);
};

export default {
  getClients,
  postClients,
  getClientsById,
};
