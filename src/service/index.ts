import axios from "axios";

export const httpRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
});

httpRequest.interceptors.request.use((config) => {
  console.log("Interceptor config", config);
  // add Authen
  config.headers.Authorization =
    "Bearer eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ";
  return config;
});

httpRequest.interceptors.response.use((response: any) => {
  console.log("Interceptor response ", response);
  response.myCustomMessage = "What are you thinking right now?";
  return response;
});
