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
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            
                            <div class="col-lg-12 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                <div class="row justify-content-center">
                         <div class="text-center mt-5">
                            <h3>.:Todos los documentos de {{this.$route.params.id}}:. 
                            </h3>
                           
                        </div>
  <div class="col-md-10">                      
    <div class="row">
       <div class="col-md-8"> 
        <base-input placeholder="Buscar un docuemnto"></base-input>  
       </div>
       <div class="col-md-2"> 
                <base-button type="primary" icon="ni ni-zoom-split-in"></base-button>
       </div>
       
    </div>

   

    <div>
          <table class="table table-responsive ">
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
    <tr>
      <td>titulo de doc.</td>
      <td>tipo de doc.</td>
      <td>categoria de doc.</td>
      <td>fecha</td>
      <td>
        <a> <button type="button" class="btn btn-warning btn-sm" @click="$router.push('/edit/100')"><!----><!----><!---->Editar</button></a>
      
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
                        
                        
                    </div>
                </card>
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
