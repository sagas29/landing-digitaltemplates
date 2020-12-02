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
                             <img src="img/brand/icono.png" class="mg-fluid " style="width: 200px;">
                            </div>
                            <div class="text-muted text-center mb-3">
                                <small>Registrate con nosotros</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-2"
                                            placeholder="Nombres"
                                            addon-left-icon="ni ni-circle-08"
                                            v-model="datosP.nombre"
                                            v-on:keyup="checkForm">
                                           
                                </base-input>
                             
                                <base-input alternative
                                            class="mb-2"
                                            placeholder="Apellidos"
                                            addon-left-icon="ni ni-circle-08"
                                            v-model="datosP.apellido"
                                            id="input-field"
                                            v-on:keyup="checkForm">
                                </base-input>
                               
                                <base-input alternative
                                            class="mb-2"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                              v-model="datosP.email"
                                              v-on:keyup="checkForm">
                                </base-input>  
                              
                                <div class="col-lg-10">  
                                    <div class="row justify-content-rigth">                       
                                <base-input alternative
                                            type="password"
                                            placeholder="contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="datosP.contraseña"
                                            v-on:keyup="checkForm">
                                </base-input>
                                
                                   <base-input alternative
                                            type="password"
                                            placeholder="Repite la contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                             v-model="datosP.cofirmacion"
                                             v-on:keyup="checkForm">
                                </base-input>
                                 <p v-if="errors.length">
                             <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                     <li v-for="error in errors"><p class="text-danger mb-0">{{ error }}</p></li>
                                 </ul>
                             </p>
                                    </div>
                                </div>
                            
                               
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" :disabled='dissabled' @click="register">Registrar cuenta{{this.$appName}}</base-button>
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
export default {
     name: 'app',
    data(){
        return{
            dissabled:true,
             strength:'Fuerte',
        errors:[],
        datosP:{
            nombre:'',
            apellido:'',
            email:'',
            contraseña:'',
            cofirmacion:''

        }    
        }
    },
    methods:{

        checkForm: function (e) {
        this.errors = [];
         if (!this.datosP.nombre) {
         this.errors.push('nombre necesario');
         this.$appName="mi app";
       }
       if (!this.datosP.apellido) {
        this.errors.push('apellido necesaria');
       }
       if (!this.datosP.email) {
        this.errors.push('email necesaria');
       }else if (!this.validEmail(this.datosP.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (!this.datosP.contraseña) {
        this.errors.push('contrase;a necesaria');
       }
       if (!this.datosP.cofirmacion) {
        this.errors.push('confirmacion necesaria');
       }else if (!this.confirmPass(this.datosP.contraseña,this.datosP.cofirmacion)) {
        this.errors.push('Contrase;as no coinciden');
      }
        if (!this.errors.length) {
       this.dissabled=false;
        return true
     
      }else{
           this.dissabled=true;
      }

      },
    confirmPass: function(contraseña,confirmacion){
         if(contraseña!=confirmacion){
           return false;
       }
       else{
           return true;
       }
    },
   validate: function() {
    var element = document.getElementById('input-field');
    element.value = element.value.replace(/[^a-zA]/, '');
        },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
        async register (){
            try{
            await auth.register(this.datosP.nombre,this.datosP.apellido,this.datosP.email);
            }catch (error){
                console.log(error);
            }

        }
    }
};

</script>
<style>
</style>
