import { callHttpClientMethod } from ".";

import { HTTP_METHOD } from "../constants";

const getDirectoryApi = async () => {
  return callHttpClientMethod("/api/preview/directory", HTTP_METHOD.get);
};

export { getDirectoryApi };
