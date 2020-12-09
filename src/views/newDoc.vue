<template>
 <div id="app">
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-3 shape-default bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-lg">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-7 py-lg-5"
                          class="border-0">
                         
                        <template>
                            <div class="row justify-content-center">
                            
                            </div>
                            <div class="text-muted text-center mb-3">
                                <small>Registra un nuevo documento propio</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-2"
                                            placeholder="Titulo para el documento"
                                            addon-left-icon="ni ni-caps-small"
                                            v-model="datosD.titulo"
                                            v-on:keyup ="checkForm">
                                           
                                </base-input>
                             
                                <base-input alternative
                                            class="mb-2"
                                            placeholder="Descripcion del docuemento"
                                            addon-left-icon="ni ni-caps-small"
                                            v-model="datosD.descripcion"
                                            id="input-field"
                                            v-on:keyup="checkForm">
                                </base-input>

                <div lass="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-gray pb-5"
                          body-classes="px-lg-10 py-lg-5"
                          class="border-0"
                          col-lg-10
                          justify-content-center>
                         <template>
                             <div class=" text-center">
                                    <a>Resumen</a>
                             </div>
                             <div py-lg-5 >
                             <a class="text-primary" >Nombre del documento:  </a>
                             </div>
                               <small>{{this.datosD.titulo}}</small>
                               <div py-lg-5>
                             <a class="text-primary">Descripcion del documento:  </a>
                             </div>
                               <small>{{this.datosD.descripcion}}</small>
                               
                            
                        </template>
                       
                    </card>
                </div>
                                
                             
                                
                              
                                <div class="col-lg-10" >  
                                    <div class="row justify-content-rigth">                       
                               
                                 <p v-if="errors.length">
                             <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                     <li v-for="error in errors"><p class="text-danger mb-0">{{ error }}</p></li>
                                 </ul>
                             </p>
                                    </div>
                                </div>
                            
                               
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" :disabled='dissabled' @click="register">Crear el documento</base-button>
                                                               </div>
                                 <router-link to="/home" class="text-success">*Nah en otro momento</router-link>

                             <div class="row justify-content-center mt-3" v-show="visible">
                                <base-alert type="danger" >
                                    <span class="alert-inner--text"><strong>Upps!  </strong>Hubo un error inesperado,porfavor intente de nuevo</span>
                                </base-alert>
                            </div>
                            
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
 </div>
</template>
<script>

import auth from "@/logic/auth";
import content from "@/logic/content";
export default {
     name: 'app',
      beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
            created() {
       
            this.getTemplate();
  },
    data(){
        return{
            dissabled:true,
            visible:false,
        body:[],
         tags:[],
         etiquetas:[

             {
              etiqueta :"lbl_nombre",
              valor: "Jua Perez"
             }
              
         ],
        errors:[],
        datosD:{
            titulo:'',
            descripcion:'',
            id_usuario:auth.getUserLogged(),
            id_plantilla:this.$route.params.id,
            }    
        }
    },
    methods:{

        checkForm: function (e) {
        this.errors = [];
         if (!this.datosD.titulo) {
         this.errors.push('nombre necesario');
           }
       if (!this.datosD.descripcion) {
        this.errors.push('descripcion necesaria');
       }

        if (!this.errors.length) {
            this.dissabled=false;
        return true
      }else{
        
           this.dissabled=true;
         
      }

      },
       async  getTemplate(){
           try{
            let response = await content.getTemplate(this.datosD.id_plantilla);
            this.body = response.data.data;
            this.tags = response;
            
           }catch (error){
              console.log(error);

           }
        },
   
 
        async register (){
            try{
            await content.register(this.datosD.id_plantilla,this.datosD.id_usuario,this.datosD.titulo,this.datosD.descripcion,this.body.contenido,this.etiquetas);
            this.$router.push("/home");
            }catch (error){
                console.log(error);
                this.visible=true;
            }

        }
    }
};

</script>
<style>
</style>
