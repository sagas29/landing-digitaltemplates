import axios from "axios";

const ENDPOINT_PATH = "https://reqres.in/api/";
const ENDPOINT_PATH2 = "https://thismyapistest.000webhostapp.com/api/clientes";

export default {

  register(nombre,apellido,telefono) {
    const user = { nombre,apellido,telefono };
    const headers = { 'Content-Type':'text/plain',};
    return axios.post(ENDPOINT_PATH2 + "/nuevo", user,{headers});
  },

  leerAPI(){

         return axios.get(ENDPOINT_PATH2);
            }

    };