import { api } from "../api/api";

const getProducts = () => {
  return api.get(`produtos`);
};

const deleteProduct = (id) => {
  return api.delete(`produtos/${id}`)

}

const postImage = (produto, file) => {
  let formData = new FormData();
  formData.append('imagemProduto', file);
  formData.append('produto', new Blob([JSON.stringify(produto)], {type:'application/json'}));
  return api.post(`produtos`, formData)
}

export default {
  getProducts,
  deleteProduct,
  postImage
};


