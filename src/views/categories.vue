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
                            <div class="col-lg-4">
                             <card shadow class="shadow-lg--hover mt-3">
                            <div class="d-flex px-0">
                                <div class="pl-4">
                                      <icon name="ni ni-briefcase-24" gradient="success" color="white" shadow
                                          rounded></icon>
                                    <h5 class="title text-success">Doc.Juridicos</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                   
                                      <base-button tag="a" href="#" type="btn btn-primary" class="mt-2"
                                      @click="$router.push('/detailCategorie/Doc.Juridicos')">
                                        Ver documentos
                                    </base-button>
                                </div>
                                
                            </div>
                              </card>
                            </div> 
                               <div class="col-lg-4">
                             <card shadow class="shadow-lg--hover mt-3">
                            <div class="d-flex px-0">
                                <div class="pl-4">
                                    <icon name="ni ni-archive-2" gradient="success" color="white" shadow
                                          rounded></icon>
                                    <h5 class="title text-success">Doc.contaduria</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                  
                                      <base-button tag="a" href="#" type="btn btn-success" class="mt-2"
                                       @click="$router.push('/detailCategorie/Doc.contaduria')">
                                         Ver documentos
                                    </base-button>
                                </div>
                            </div>
                              </card>
                            </div> 
                               <div class="col-lg-4">
                             <card shadow class="shadow-lg--hover mt-3">
                            <div class="d-flex px-0">
                                <div class="pl-4">
                                    <icon name="ni ni-badge" gradient="success" color="white" shadow
                                          rounded></icon>
                                    <h5 class="title text-success">Doc.Empleo</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    
                                      <base-button tag="a" href="#" type="btn btn-warning" class="mt-2"
                                           @click="$router.push('/detailCategorie/Doc.Empleo')">
                                         Ver documentos
                                    </base-button>
                                </div>
                            </div>
                              </card>
                            </div> 
                               <div class="col-lg-4">
                             <card shadow class="shadow-lg--hover mt-3">
                            <div class="d-flex px-0">
                                <div class="pl-4">
                                      <icon name="ni ni-hat-3" gradient="success" color="white" shadow
                                          rounded></icon>
                                    <h5 class="title text-success">Doc.Incripcion de empresas</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                   
                                      <base-button tag="a" href="#" type="btn btn-danger" class="mt-2"
                                        @click="$router.push('/detailCategorie/Doc.Incripcion de empresas')">
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
export default {
   beforeCreate() {
               
      if(!auth.getUserLogged()){
            this.$router.push("/");
      }
     
  },
};
</script>
<style>
</style>
