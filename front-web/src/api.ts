import axios from "axios";
import { OrderPayload } from "./Orders/types";

//const API_URL = process.env.REACT_APP_API_URL;
const API_URL_WEB = 'https://andre-dias-sds2.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;


export function fetchProducts(){
    return axios(`${API_URL_WEB}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
    return axios.post(`${API_URL_WEB}/orders`, payload);
}
