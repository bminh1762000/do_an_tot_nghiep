import { callHttpClientMethod } from ".";

import { HTTP_METHOD } from "../constants";

const loginApi = async (email: string, password: string) => {
  return callHttpClientMethod("/api/auth/login", HTTP_METHOD.post, {
    email,
    password,
  });
};

const signUpApi = async (email: string, password: string, name: string) => {
  return callHttpClientMethod("/api/auth/signup", HTTP_METHOD.post, {
    email,
    password,
    name,
  });
};

export { loginApi, signUpApi };
