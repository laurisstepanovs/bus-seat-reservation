
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const apiLink = process.env.NODE_ENV === "production"
    ? "/api"
    : "http://127.0.0.1:8000/api"

const BaseApi = axios.create({
  baseURL: apiLink
});

const Api = () => {
  return BaseApi;
};

export default Api;