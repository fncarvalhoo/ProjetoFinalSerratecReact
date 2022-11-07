import { api } from "../api/api";

const getProducts = () => {
  return api.get(`produtos`);
};

const deleteProduct = (id) => {
  return api.delete(`produtos/${id}`)

}

export default {
  getProducts,
  deleteProduct
};


