import { api } from "../api/api";

const getProducts = () => {
  return api.get(`produtos`);
};

export default {
  getProducts,
};
