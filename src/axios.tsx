import axios from "axios";
import {baseURL} from './Constants/const'
const instance = axios.create({
    baseURL: baseURL ,
  });
  
  export default instance