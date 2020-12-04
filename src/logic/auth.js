import axios from "axios";
import Cookies from "js-cookie";


const ENDPOINT_PATH2 = "https://thismyapistest.000webhostapp.com/api/clientes";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },
  ///API//
  
  register(nombre,apellido,telefono) {
    const user = { nombre,apellido,telefono };
    const headers = { 'Content-Type':'text/plain',};
    return axios.post(ENDPOINT_PATH2 + "/nuevo", user,{headers});
  },

  leerAPI(){

         return axios.get(ENDPOINT_PATH2);
            }

    };