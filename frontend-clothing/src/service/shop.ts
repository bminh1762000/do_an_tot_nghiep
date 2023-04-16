import { callHttpClientMethod } from ".";
import { HTTP_METHOD } from "../constants";

const getShopItemsApi = async () => {
  return callHttpClientMethod("/api/shop/collection", HTTP_METHOD.get);
};

export { getShopItemsApi };
