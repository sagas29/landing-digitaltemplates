<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
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
                            
                             <img src="img/brand/icono.png" class="mg-fluid floating" style="width: 400px;">
                             
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
                       
                     
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Contraseña"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                 Recuerdame
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="button" class="btn btn-1 btn-success" @click="$router.push('home')">Iniciar sesion</base-button>
                                </div>
                            </form>
                       
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">

                                <router-link to="/" class="text-light">Olvidaste tu Contraseña?</router-link>
                            </a> 
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <router-link to="/register" class="text-light">Registrate</router-link>
                            </a>
                        </div>
                    </div>
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
export default {
  name: "home",
  components: {}
};
</script>
