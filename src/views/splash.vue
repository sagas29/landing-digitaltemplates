<template>
   <div id="app">

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-3 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row"> 
                            
                             <img src="img/brand/icono.png" class="mg-fluid " style="width: 400px">
                             
                            <div class="col-lg-6">
                              
                                <h1 class="display-3  text-white">DigitalTemplates
                                    <span>Tu oficina donde te encuentres</span>
                                </h1>
                                <p class="lead  text-white">Guarda ,edita y crea tus documentos legales donde los necesites.</p>
                               
                            </div>
                            
                        
                          
                        </div>
<section>
     <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-1">
                       
                     
                            <form role="form" >
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="usuario"
                                            v-on:keyup="checkForm">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="contraseña"
                                            v-on:keyup="checkForm">
                                </base-input>
                                <base-checkbox v-model="remember">
                                 Recuerdame
                                </base-checkbox>
                            <p v-if="errors.length">
                             <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                     <li v-for="error in errors"><p class="text-danger mb-0">{{ error }}</p></li>
                                 </ul>
                             </p>
                                <div class="text-center">
                                    <base-button type="button" class="btn btn-1 btn-success" :disabled='dissabled' v-on:click="$router.push('/home')">Iniciar sesion</base-button>
                                </div>

                             <div class="row justify-content-center mt-3">
                                <base-alert type="danger" v-show="visible">
                                    <span class="alert-inner--text"><strong>Error!</strong> Usuario o contraseña incorrectas</span>
                                </base-alert>
                            </div>
                                <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">

                                <router-link to="/" class="text-light">Olvidaste tu Contraseña?</router-link>
                            </a> 
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <router-link to="/logup" class="text-success">Registrate</router-link>
                            </a>
                        </div>
                       
                    </div>
                            </form>
                       
                    </card>
                </div>
            </div>
        </div>
</section>
        
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
  
       

    </div>
</template>

<script>
import auth from "@/logic/auth";
export default {

     name: 'app',
    data(){
        return{
             errors:[],
            remember: false,
            visible:false,
            dissabled: true,
            usuario:null,
            contraseña:null,
         
        }
    },
    methods:{

         checkForm: function () {
   this.errors = [];
      if (!this.usuario) {
        this.errors.push('Usuario necesario');

      }else if (!this.validEmail(this.usuario)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (!this.contraseña) {
        this.errors.push('Contraseña necesaria');

      }
      if (!this.errors.length) {
       this.dissabled=false;
        return true
     
      }else{
           this.dissabled=true;
      }

      },
       validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
       async login(){
           try{
            await auth.leerAPI();
            this.$router.push("/home");
           }catch (error){
               console.log(error);

           }
        }

 }
};

</script>
