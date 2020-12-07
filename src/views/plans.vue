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
             <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-10">
                                <h1 class="display-3  text-white">DigitalTemplates 
                                    <span>Elige el plan que mas te convenga</span>
                                </h1>
                                                               
                            </div>
                        </div>
                    </div>
                </div>
                
                     <section class="section section-lg pt-lg-10 mt--000">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid justify-content-center">
                            <div class="col-lg-6" v-for="(datosPlan,indice) in datosPlan">
                                <card class="border-0" hover shadow body-classes="py-5">
                                     <h1 class="heading-1 mb-5 text-success">{{datosPlan.nombre}}</h1>
                                    
                                    <div>
                                        
                                         <a >Duracion en meses:{{datosPlan.vigencia_meses}}</a>
                                    </div>
                                    <div>
                                         <p class="mb-4" align="justify">{{datosPlan.descripcion}}</p>

                                    </div>
                                        <h1 class="display2 mb-3">${{datosPlan.precio}}</h1>
                                    <base-button tag="a" href="#" type="btn btn-success" class="mt-5">
                                        {{msg}}
                                    </base-button>
                                </card>
                                
                             </div>      
                                                                          
                        </div>
                        
                    </div>
                </div>
            </div>

   <div class="container mt-5" v-show="dissabled">
       <base-button block type="success" @click="$router.push('/')">Volver a inicio</base-button>
   </div>
   <div class="container mt-5" v-show="!dissabled">
       <base-button block type="success" @click="$router.push('/home')">Volver a mi perfil</base-button>
   </div>

        </section>
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
  name: "plans",
            beforeCreate() {
      if(!auth.getUserLogged()){
           
      }
     
  },
            created() {
                this.getPlans();
       if(auth.getUserLogged()){
           this.msg="SUSCRITO"
           this.dissabled=false
      }else{
          this.msg="SUSCRIBIETE"
      }
  },
       data(){
           return{
               msg:[],
               modal:true,
               dissabled: true,
              datosPlan: [],
           }
       },
       methods:{
             async getPlans(){
           try{
            let response = await content.getPlans();
            this.datosPlan = response.data.data;
           }catch (error){
               console.log(error);

           }
        },
       }
};
</script>
<style>

</style>
