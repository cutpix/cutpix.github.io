import axios from "axios";

const CloudConvertApi = axios.create({
  baseURL: "https://api.cloudconvert.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default CloudConvertApi;
