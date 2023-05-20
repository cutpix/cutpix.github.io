import axios from "axios";

const CloudConvertApi = axios.create({
  baseURL: "https://api.sandbox.cloudconvert.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default CloudConvertApi;
