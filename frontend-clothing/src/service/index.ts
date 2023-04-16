import axios from "axios";

import { HTTP_METHOD } from "../constants";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const callHttpClientMethod = async (
  url: string,
  method: string,
  data?: any,
  setting?: any
) => {
  switch (method.toString().toLowerCase()) {
    case HTTP_METHOD.post:
      return instance
        .post(url, data, setting)
        .then((x) => (x ? x.data : undefined));
    case HTTP_METHOD.put:
      return instance.put(url, data).then((x) => (x ? x.data : undefined));
    case HTTP_METHOD.delete:
    case "delete":
      return instance
        .delete(url, { params: data })
        .then((x) => (x ? x.data : undefined));
    case HTTP_METHOD.patch:
      return instance.patch(url, data).then((x) => (x ? x.data : undefined));
    case HTTP_METHOD.get:
    default:
      return instance.get(url, setting).then((x) => (x ? x.data : undefined));
  }
};

export default instance;
