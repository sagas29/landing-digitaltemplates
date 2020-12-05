<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-3 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
              <div class="container justify-content-center shape-container d-flex mt--100">
                     <h1 class="display-3  text-white">
                         Documentos de la categoria disponibles.
                      </h1>
                      
             </div>
        </section>
      
         <section class="section section-skew">
            <div class="container">
              
                <card shadow class="card-profile mt--300">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center col-lg-12">
                                <div class="col-lg-10">      
                                     
                                </div>
                                 <div class="col-lg-2">
                                        <base-button type="success" size="md" class="float-right"  @click="$router.push('/categories')">Volver</base-button>
                                </div>
                              
                                    
                         </div>
                         <div class="row justify-content-center col-lg-12">
                                <div class="justify-content-center col-lg-13">      
                                       <h3>Docuementos en la categoria: {{this.$route.params.id}}
                                     </h3>
                                </div>
                               
                                    
                         </div>
                            <div class="col-lg-12 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                <div class="row justify-content-center">
   
<div class="row justify-content-center">
          <table class="table table-responsive">
  <thead>
    <tr>
      <th>Título</th>
      <th>Tipo</th>
      <th>Categoría</th>
      <th>Fecha creación</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
       <tr v-for="(usuario,indice) in usuarios" >
      <td>{{usuario.id}}</td>
      <td>{{usuario.nombre}}</td>
      <td>{{usuario.apellido}}</td>
      <td>{{usuario.telefono}}</td>
      <td>
        <a> <button type="button" class="btn btn-primary btn-sm" @click="$router.push('edit/'+ usuario.nombre)"><!----><!----><!---->Abrir</button></a>
      </td>
    </tr>


  </tbody>
</table>
</div>
</div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </card>
            </div>
        </section>
           
    </div>
</template>
<script>
import auth from "@/logic/auth";
export default {
   beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
   created() {
     this.getHistorialDocs();
   },
  data(){
           return{            
                usuarios: [],
                visible:false
           }
          
       },
       methods:{
             async getHistorialDocs(){
           try{
            let response = await auth.leerAPI();
            this.usuarios = response.data;
            this.visible=true;
           }catch (error){
               console.log(error);

           }
        },
       }
};
</script>
<style>
.table{
background-color: rgba(255, 253, 253, 0.537);

}
</style>
