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
                                       <h3>Documentos en la categoria:</h3>
                                     
                                </div>
                               
                               
                                    
                         </div>
                            <div class="col-lg-12 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                <div class="row justify-content-center">
                              <div class="row justify-content-center mt-3" v-show="Errvisible">
                                <base-alert type="danger" >
                                    <span class="alert-inner--text "><strong>Ha caray!  </strong>Sin plantillas disponibles</span>
                                </base-alert>
                            </div>
   
<div class="row justify-content-center" v-show="Tvisible">
          <table class="table table-responsive">
  <thead>
    <tr>
      <th>Título</th>
      <th>Descripcion</th>
      <th>Fecha creación</th>
      <th>Fecha actualizacion</th>
      <th>Acciónes</th>
    </tr>
  </thead>
  <tbody>
       <tr v-for="(usuario,indice) in usuarios" >
      <td>{{usuario.titulo}}</td>
      <td>{{usuario.descripcion}}</td>
      <td>{{usuario.created_at}}</td>
      <td>{{usuario.updated_at}}</td>
      <td>
        <a> <button type="button" class="btn btn-primary btn-sm" @click="$router.push('newDoc/'+ usuario.id_plantilla)">Abrir</button></a>
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
import content from "@/logic/content";
export default {
   beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
   created() {
     this.getListCat();
     
   },
  data(){
           return{            
                usuarios: [],
                categorias:[
                  "Doc.Juridicos",
                  "Doc.contaduria",
                  "Doc.Empleo",
                  "Doc.Incripcion de empresas"   
               ],
               index:'',
                Tvisible:false,
                Errvisible:false
           }
          
       },
       methods:{
             async getListCat(){
           try{
            let response = await content.getListCat(this.$route.params.id);
            this.usuarios = response.data.data;
           
            this.Tvisible=true;
            
           }catch (error){
               console.log(error);
               this.Errvisible=true;

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
