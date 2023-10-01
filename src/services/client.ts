import axios from "axios";
import { getJwtToken } from "./auth";

export const PROTOCOL = "https";
export const SERVER = "job.minhafazenda.ag";

const BASE_URL = `${PROTOCOL}://${SERVER}/`;

export const apiClient = axios.create({ baseURL: BASE_URL });

apiClient.interceptors.request.use(
  function (config) {
    if (!!getJwtToken()) {
      config.headers["TokenAuthorization"] = getJwtToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
