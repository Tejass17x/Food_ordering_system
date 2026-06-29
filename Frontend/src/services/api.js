import axios from "axios";


const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://food-ordering-system-y0qw.onrender.com/api";



const API = axios.create({

baseURL: BASE_URL,

headers:{
"Content-Type":"application/json"
}

});





API.interceptors.request.use(

(config)=>{


const token = localStorage.getItem("token");


if(token){

config.headers.Authorization =
`Bearer ${token}`;

}


return config;


},

(error)=>{

return Promise.reject(error);

}

);





console.log("API:",BASE_URL);



export default API;