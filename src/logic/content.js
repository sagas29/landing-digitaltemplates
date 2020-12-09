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
   getCategories(){
            return axios.get(ENDPOINT_PATH+"categorias");
                   },
        /////////new dOC/////////       
   register(id_plantilla,id_usuario,titulo,descripcion,contenido) {
          
           
        const registro = { id_plantilla,id_usuario,titulo,descripcion,contenido};
            const headers = { 'Content-Type':'text/plain'};
            return axios.post(ENDPOINT_PATH + "documentos", registro,{headers});
            },
    registerDocActu(id_documento,titulo,descripcion,contenido,etiquetas) {
          
           
                const registro = {id_documento,titulo,descripcion,contenido,etiquetas};
                    const headers = { 'Content-Type':'text/plain'};
                    return axios.post(ENDPOINT_PATH + "documentos_actualizar/", registro,{headers});
                    },
            
deleteMyDoc(id_documento){
        const headers = { 'Content-Type':'text/plain'};
        const id = { id_documento };
        return axios.post(ENDPOINT_PATH+"documentos/"+id_documento,{headers});
}

    };