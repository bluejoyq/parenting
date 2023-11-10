import axios from "axios";
export const api = axios.create({
  baseURL: "http://15.165.169.227:8080",
});
