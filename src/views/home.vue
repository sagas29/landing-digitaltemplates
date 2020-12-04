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
        </section>
        <section class="section-profile-cover section-shaped my-0">
            <div class="container">
                <card shadow class="card-profile mt--300">
                    <div class="px-0">
                        <div class="row">

                        <div class="col-lg-3">
                            <div class="card-profile-image">
                                    <a href="#">
                                        <img src ="img/brand/icono.png">
                                    </a>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <h3>{{msg}}</h3>
                           
                        </div> 
                         <div class="col-lg-2">
                                   <base-button type="warning" size="sm" class="float-right" v-on:click="deleteUserLogged">Salir</base-button>
                            </div>
                        </div>
                        <div class="col-lg-20">
                        <card shadow class="shadow-lg--hover mt-3" >
                            <div class="row">
                                 <div class="col-md-4">
                                  <h5>Nombre:</h5>
                                 </div>
                                 <div class="col-md-8">
                                  <base-input alternative
                                            class="mb-2"
                                            :disabled="dissabled"
                                            v-model='msg'>
                                        </base-input>
                                </div>
                                
                            </div>
                             <div class="row">
                                 <div class="col-md-4">
                                  <h5>Apellido:</h5>
                                 </div>
                                 <div class="col-md-8">
                                  <base-input alternative
                                            class="mb-2"
                                            :disabled="dissabled"
                                            v-model='msg'>
                                        </base-input>
                                </div>
                                
                            </div>
                             <div class="row">
                                 <div class="col-md-4">
                                  <h5>Email:</h5>
                                 </div>
                                 <div class="col-md-4">
                                  <base-input alternative
                                            class="mb-2"
                                            :disabled="dissabled"
                                            v-model='msg'>
                                        </base-input>
                                </div>
                                
                            </div>
                             <div class="row">
                                 <div class="col-md-4">
                                  <h5>Contraseña:</h5>
                                 </div>
                                 <div class="col-md-4">
                                  <base-input alternative
                                            class="mb-2"
                                            :disabled="dissabled"
                                            v-model='msg'>
                                        </base-input>
                                </div>
                            </div>
                              <div class="row">
                                 <div class="col-md-4">
                                  <h5>Plan actual:</h5>
                                 </div>
                                 <div class="col-md-4">
                                  <base-input alternative
                                            class="mb-2"
                                            disabled
                                            v-model='msg'>
                                        </base-input>
                                </div>
                                <div class="col-md-4">
                                 <base-button tag="a" href="#" size="sm" type="btn btn-success"  v-show="!dissabled" v-on:click="$router.push('/plans')" class="mt-2">
                                        Ver planes
                                    </base-button>
                                </div>
                                
                            </div>
                            
                            
                             <base-checkbox v-model="dissabled">
                                 Desbloquear mis datos 
                                </base-checkbox>
                                 <div class="col-lg-7" v-show="!dissabled">
                                   <base-button type="success" size="sm" class="float-right" >Guardar cambios</base-button>
                            </div>
 
                        </card>
                            </div>                                                        
                            <div class="mt-2 py-2 border-top text-center">
                            <div class="row justify-content-center">
                               <button type="button" class="btn btn-1 btn-success btn-lg" @click="$router.push('/categories')"><!----><!----><!---->Ver categorias</button>
                               <button type="button" class="btn btn-primary btn-lg" @click="getHistorialDocs"><!----><!----><!---->historial de docuementos</button>
                               
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
         <section class="section section-skew" v-show="visible">
            <div class="container">
                <card shadow class="card-profile mt--100">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-10">      
                                      <h3>.:Ultimos documentos:. 
                                     </h3>
                                </div>
                                <div class="col-lg-2">
                                        <base-button type="danger" size="sm" class="float-right"  @click="visible = !visible">Cerrar</base-button>
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
        <a> <button type="button" class="btn btn-warning btn-sm" @click="$router.push('edit/'+ usuario.nombre)"><!----><!----><!---->Editar</button></a>
      
        <a> <button type="button" class="btn btn-danger btn-sm"><!----><!----><!---->Eliminar</button></a>
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
       name: 'app',
            beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
            created() {
                

      this.msg = auth.getUserLogged();
     
  },
       data(){
           return{
               msg:[],
               dissabled: true,
               visible: false,
                usuarios: [],
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
         deleteUserLogged() {
               this.$router.push("/");
             return auth.deleteUserLogged();
          }
        

       },
  
};
</script>
<style>

</style>
