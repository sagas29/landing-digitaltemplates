<template>
   <div id="app">

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-2 shape-default shape-skew">
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
                                            type="password"
                                            placeholder="Contraseña antigua"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="antigua"
                                            v-on:keyup="checkForm">
                                </base-input>
                                 <base-input alternative
                                            type="password"
                                            placeholder="Contraseña nueva"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="nueva"
                                            v-on:keyup="checkForm">
                                </base-input>
                               
                            <p v-if="errors.length">
                             <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                <ul>
                                     <li v-for="error in errors"><p class="text-danger mb-0">{{ error }}</p></li>
                                 </ul>
                             </p>
                                <div class="text-center">
                                    <base-button type="button" class="btn btn-1 btn-success" :disabled='dissabled' v-on:click="registerNewPass">Cambiar mi contraseña</base-button>
                                </div>

                             <div class="row justify-content-center mt-3">
                                <base-alert type="danger" v-show="visible">
                                    <span class="alert-inner--text"><strong>Error!</strong>UPPS!! algo salio mal</span>
                                </base-alert>
                            </div>
                                <div class="row mt-3">
                       
                         <router-link to="/home" class="text-success">Mejor en otro momento</router-link>
                       
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
             beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
            created() {
       
          console.log(auth.getUserLogged());
  },
    data(){
        return{
             errors:[],
             antigua:'',
            visible:false,
            dissabled: true,
            nueva:null,
            id:''
         
        }
    },
    methods:{

         checkForm: function () {
   this.errors = [];
      if (!this.antigua) {
        this.errors.push('Ingrese la contraseña antigua');

      }
      if (!this.nueva) {
        this.errors.push('Ingrese una nueva contraseña');

      }
      if (!this.errors.length) {
       this.dissabled=false;
        return true
     
      }else{
           this.dissabled=true;
           this.visible=false;
      }

      },
      
       async registerNewPass(){
         try {
         let response = await auth.registerNewPass(auth.getUserLogged(),this.antigua, this.nueva);
           
              
        this.$router.push("/home");
      } catch (error) {
        this.visible = true;
        console.log(error);
      }
        }

 }
};

</script>
