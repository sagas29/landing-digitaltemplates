<template>
    <section class="section section section-shaped section-lg my-1">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col-lg-4">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-7 py-lg-6"
                          class="border-0">
              
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>rellene los campos </small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo1"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo2">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="campo3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo1"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo2">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="campo3">
                                </base-input>
                               
                               <base-input alternative
                                            class="mb-3"
                                            placeholder="campo1"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo2">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="campo3">
                                </base-input>
                               <base-input alternative
                                            class="mb-3"
                                            placeholder="campo1"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="campo2">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="campo3">
                                </base-input>
                                 <base-button type="primary" class="my-4">Guardar</base-button>
                                     <base-button type="primary" class="my-4">Imprimir</base-button>
                            </form>
                            
                        </template>
                    </card>
                </div>
                 <div class="col-lg-8">
                    <card type="secondary" shadow
                          header-classes="bg-gray pb-5"
                          body-classes="px-lg-7 py-lg-5"
                          class="border-0">
                         <template>
                             <div class="text-center text-muted mb-4">
                                <small>Vista Previa del documento {{this.$route.params.id}}</small>
                            </div>
                        
                                <p v-html="this.controls.text"></p>
                        </template>
                        <template>
                            <a> <button type="button" class="btn btn-warning btn-sm"><!----><!----><!---->Imprimir</button></a>
                    
                        </template>
                    </card>
                </div>
            </div>
        </div>
        
        
    </section>
</template>
<script>
import auth from "@/logic/auth";
export default {
      beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
  data(){
           return{
               body:'',
               tags:{
                    text:'',
                   input:'',
                   checkB:'',
                   img:''
               },
               controls:{
                   text:'este es un texto que representa texto planno que formaria cualquier parte no rellenable de cualquier formulario',
                   input:'<input type="text" style="border:0"/>',
                   radioB:'<input type="radio" id="huey" name="drone" value="huey">',
                   checkB:'<input type="checkbox" id="cbox1" value="first_checkbox">',
                   img:'<img src="img/brand/icono.png" class="mg-fluid " style="width: 400px">'


               }
           }
          
       },
       methods:{

       }
};


</script>
<style>
</style>
