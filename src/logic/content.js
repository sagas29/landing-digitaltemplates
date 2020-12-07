import axios from "axios";



const ENDPOINT_PATH = "https://digital-templates.herokuapp.com/api/";


export default {

  ///API//

  getEditMydoc(id_documento){

         return axios.get(ENDPOINT_PATH+"documentos/"+id_documento);
            },
  getListCat(id_categoria){
   
          return axios.get(ENDPOINT_PATH+"plantillas?id_categoria="+id_categoria);
           }

    };