
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const apiLink = "/api";

const BaseApi = axios.create({
  baseURL: apiLink
});

const Api = () => {
  return BaseApi;
};

export default Api;
