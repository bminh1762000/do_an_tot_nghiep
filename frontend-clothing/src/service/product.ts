import { callHttpClientMethod } from ".";

import { HTTP_METHOD } from "../constants";

const getProductsApi = async () => {
  return callHttpClientMethod("/api/products", HTTP_METHOD.get);
};

const getProductDetailApi = async (id: string) => {
  return callHttpClientMethod(`/api/products/${id}`, HTTP_METHOD.get);
};

export { getProductsApi, getProductDetailApi };
