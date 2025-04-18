import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
