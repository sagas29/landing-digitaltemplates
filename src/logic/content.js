import axios from "axios";



const ENDPOINT_PATH = "https://digital-templates.herokuapp.com/api/";


export default {

  ///API//

  getEditMydoc(id_documento){

         return axios.get(ENDPOINT_PATH+"documentos/"+id_documento);
            },
  getTemplate(id_plantilla){

               return axios.get(ENDPOINT_PATH+"plantillas/"+id_plantilla);
                  },          
  getListCat(id_categoria){
   
          return axios.get(ENDPOINT_PATH+"plantillas?id_categoria="+id_categoria);
           },
   getPlans(){
   
            return axios.get(ENDPOINT_PATH+"planes");
               },
   register(id_plantilla,id_usuario,titulo,descripcion,contenido,tags) {
            const registro = { id_plantilla,id_usuario,titulo,descripcion,contenido,etiquetas};
            const etiquetas=[tags];
            const headers = { 'Content-Type':'text/plain'};
            return axios.post(ENDPOINT_PATH + "documentos", registro,{headers});
            },

    };