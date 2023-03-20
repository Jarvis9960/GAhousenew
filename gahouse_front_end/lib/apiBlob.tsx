import axios from "axios";
const apiBlob = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL+'/api',
  withCredentials: true,
  headers: {'Access-Control-Allow-Credentials':true,
"Access-Control-Allow-Origin":"*",
"responseType": 'blob',
},
});
export default apiBlob;
