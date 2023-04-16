import { callHttpClientMethod } from ".";

import { HTTP_METHOD } from "../constants";

const getCartItemsApi = async (token: string) => {
  return callHttpClientMethod("/api/shop/cart", HTTP_METHOD.get, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const addCartItemApi = async (itemId: string, token: string) => {
  return callHttpClientMethod(
    `/api/shop/collection/add/${itemId}`,
    HTTP_METHOD.put,
    null,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

const removeItemFromCartApi = async (itemId: string, token: string) => {
  return callHttpClientMethod(
    `/api/shop/collection/remove/${itemId}`,
    HTTP_METHOD.put,
    null,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

const clearItemFromCartApi = async (itemId: string, token: string) => {
  return callHttpClientMethod(
    `/api/shop/collection/${itemId}`,
    HTTP_METHOD.delete,
    null,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export {
  getCartItemsApi,
  addCartItemApi,
  removeItemFromCartApi,
  clearItemFromCartApi,
};
