// import Instance from "../Axios/Instance";
// import { getUserToken } from "../User/UserLocalStorage";
import axios from "axios";

// const token = getUserToken("token");
// console.log("Interceptor Token ", token);

const baseURL = process.env.REACT_APP_BASE_URL;
console.log("BASEURL", baseURL);

// Creating Instance
const Instance = axios.create({
  baseURL: baseURL,
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${authToken}`, // Add your token here
  },
});

export const request = async ({ ...options }) => {
  // const auth = token ? `Bearer ${token}` : ''
  // config.headers.common['Authorization'] = auth;
  //   Instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  const onSuccess = (response) => response;

  const onError = (error) => {
    //optionally catch errors and add additional logging here
    return error;
  };
  return Instance(options).then(onSuccess).catch(onError);
};
