import axios from "axios";
import Cookies from "js-cookie";


const ENDPOINT_PATH = "https://digital-templates.herokuapp.com/api/";

export default {
  //COOKIES///
  setUserLogged(userLogged) {
    Cookies.set('userLogged', userLogged);
  },
  getUserLogged() {
    return Cookies.get('userLogged');
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },
  ///API//

  login(correo, password) {
    const user = { correo, password };
    //const headers = { 'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'};
    const headers = { 'Content-Type':'text/plain'}
    //const headers = {'Access-Control-Allow-Origin':'*'};
    return axios.post(ENDPOINT_PATH + "auth", user,{headers});
  },

  register(nombre,apellido,telefono,direccion,correo,password) {
    const user = { nombre,apellido,telefono,direccion,correo,password };
    const headers = { 'Content-Type':'text/plain'};
    return axios.post(ENDPOINT_PATH + "/registro", user,{headers});
  },
  registerNewPass(id_usuario,antigua_password,nueva_password) {
    const credentials = { id_usuario,antigua_password,nueva_password};
    const headers = { 'Content-Type':'text/plain'};
    return axios.post(ENDPOINT_PATH + "usuarios", credentials,{headers});
  },















  leerAPI(){

         return axios.get(ENDPOINT_PATH2);
            }

    };