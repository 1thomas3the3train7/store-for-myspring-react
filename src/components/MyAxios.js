import axios from "axios";
import {useNavigate} from "react-router-dom";


export const baseurl = axios.create({
    baseURL:"http://localhost:8080/",
    withCredentials:true,
})
export const myimage = axios.create(
    {baseURL:"http://localhost:8080/",withCredentials:true},
    {},
    {
    headers:{
        "Content-Type": "multipart/form-data",
    }
})

export const myurl1 = "http://localhost:8080/";
export const myurl = "https://oraoraora.herokuapp.com/"
export const thisUrl = "https://react-store-mu-ashen.vercel.app/"
export const myheaders = "headers:{\n" +
    "        \"Content-Type\": \"multipart/form-data\",\n" +
    "    }"
const $host = axios.create({baseURL:myurl})
const $authHostx = axios.create({baseURL:myurl})
const authInterceptor = config => {
    config.headers.authorization = "Bearer " + sessionStorage.getItem("token")
    return config
}

$authHostx.interceptors.request.use(authInterceptor)



export {
    $host,
    $authHostx
}