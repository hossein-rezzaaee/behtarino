import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

const { _get, _post, _put, _delete } = {
  _get: axios.get,
  _post: axios.post,
  _put: axios.put,
  _delete: axios.delete,
};

export const getProducts = (params) => {
  return _get(
    `products${
      params?.category && params.category !== 'all'
        ? `/category/${params.category}`
        : ``
    }`,
    { params: { sort: params.sort } }
  );
};

export const getProduct = (id) => _get(`products/${id}`);

export const getCategories = () => _get('products/categories');
