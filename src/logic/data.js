import axios from "axios";



const ENDPOINT_PATH = "https://digital-templates.herokuapp.com/api/";


export default {

  ///API//

  ////X////
  updateData(id_usuario,nombre,apellido,telefono,direccion) {
    const user = { id_usuario,nombre,apellido,telefono,direccion };
    const headers = { 'Content-Type':'text/plain'};
    return axios.post(ENDPOINT_PATH +"usuario_update", user,{headers});
  },
  
  getData(id_usuario){

         return axios.get(ENDPOINT_PATH+"usuarios/"+id_usuario);
            },
  getMyDocs(id_usuario){
   
          return axios.get(ENDPOINT_PATH+"documentos?id_usuario="+id_usuario);
           }

    };