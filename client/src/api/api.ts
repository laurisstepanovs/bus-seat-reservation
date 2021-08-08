
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const apiLink = "http://46.101.172.144:8000/api";

const BaseApi = axios.create({
  baseURL: apiLink
});

const Api = () => {
  return BaseApi;
};

export default Api;
