<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-3 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
       <section class="section section-skew">
            <div class="container align-items-center">
                     <div class="container shape-container d-flex">
                     <h1 class="display-3  text-white">
                         Categorias de documentos disponibles.
                      </h1>
                </div>
            <section class="section section-lg pt-lg-0 mt--000">
            
            <div class="container">
                <div class="row justify-content-center">
                     <div class="row row-grid">
                       

                               <div class="col-lg-4" v-for="(cat,indice) in body.data">
                             <card shadow class="shadow-lg--hover mt-3">
                            <div class="d-flex px-0">
                                <div class="pl-4">
                                    <icon name="ni ni-archive-2" gradient="success" color="white" shadow
                                          rounded></icon>
                                    <h5 class="title text-success">{{body.data[indice].nombre}}</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                  
                                      <base-button tag="a" href="#" type="btn btn-primary" class="mt-2"
                                       @click="$router.push('/detailCategorie/'+body.data[indice].id_categoria)">
                                         Ver documentos
                                    </base-button>
                                </div>
                            </div>
                              </card>
                            </div> 

                             


                                   <div class="container mt-5">
                                      <base-button block type="success" @click="$router.push('/home')">
                                      Volver a mi perfil
                                      </base-button>
                                  </div>
                                                    
                            
                        
                    </div>
                </div>
            </div>
        </section>
            </div>
        </section>
        </div>
    </section>
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
   created(){
  this.getCategories();

   },
      data(){
        return{
          body:[]

        }
      },
        methods:{
           async  getCategories(){
           try{
            let response = await content.getCategories();
            this.body=response.data;
            
           }catch (error){
              console.log(error);

           }
        },


          
        }
      }
     


</script>
<style>
</style>
