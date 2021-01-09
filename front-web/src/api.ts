import axios from "axios";

const API_URL = 'http://localhost:8080';
const API_URL_WEB = 'https://andre-dias-sds2.herokuapp.com';


export function fetchProducts(){
    return axios(`${API_URL_WEB}/products`)
}