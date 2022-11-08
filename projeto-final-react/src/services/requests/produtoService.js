import { api, apiFile } from "../api/api";

const getProducts = () => {
  return api.get(`produtos`);
};
const getProductById = (id) => {
  return api.get(`produtos/${id}`);
};

const deleteProduct = (id) => {
  return api.delete(`produtos/${id}`)

}

const postImage = (produto, file) => {
  let formData = new FormData();
  formData.append('imagemProduto', file);
  formData.append('produto', new Blob([JSON.stringify(produto)], {type:'application/json'}));
  return apiFile.post(`produtos`, formData)
}

const editProduct = (id, produto, file) =>{
  console.log("55555",id, produto, file);
  let formData = new FormData();
  formData.append('imagemProduto', file);
  formData.append('produto', new Blob([JSON.stringify(produto)], {type:'application/json'}));
  return apiFile.put(`produtos/${id}`, formData)
}

export default {
  getProducts,
  getProductById,
  deleteProduct,
  postImage,
  editProduct
};


