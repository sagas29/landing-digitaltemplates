<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src ="img/brand/icono.png" class="raised">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                   <base-button type="default" size="md" class="float-right" @click="$router.push('/')">SALIR</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Doc. propios</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Doc. Subidos</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Nombre de Usuario
                               
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Pais ,  region</div>
                            
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                               <button type="button" class="btn btn-1 btn-success btn-lg"><!----><!----><!---->Nuevo docuemento</button>
                               <button type="button" class="btn btn-primary btn-lg"><!----><!----><!---->historial de docuementos</button>
                               
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
         <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            
                            <div class="col-lg-12 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                <div class="row justify-content-center">
          <div class="text-center mt-5">
                            <h3>.:Ultimos documentos:. 
                            </h3>
                           
                        </div>
<div class="row justify-content-center">
          <table class="table table-responsive">
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
        <a> <button type="button" class="btn btn-warning btn-sm" @click="$router.push('edit')"><!----><!----><!---->Editar</button></a>
      
        <a> <button type="button" class="btn btn-danger btn-sm"><!----><!----><!---->Eliminar</button></a>
      </td>
    </tr>
    <tr>
      <td>titulo de doc.</td>
      <td>tipo de doc.</td>
      <td>categoria de doc.</td>
      <td>fecha</td>
      <td>
                <a> <button type="button" class="btn btn-warning btn-sm"><!----><!----><!---->Editar</button></a>
      
        <a> <button type="button" class="btn btn-danger btn-sm"><!----><!----><!---->Eliminar</button></a>
      </td>
    </tr>
    <tr>
      <td>titulo de doc.</td>
      <td>tipo de doc.</td>
      <td>categoria de doc.</td>
      <td>fecha</td>
      <td>
                <a> <button type="button" class="btn btn-warning btn-sm"><!----><!----><!---->Editar</button></a>
      
        <a> <button type="button" class="btn btn-danger btn-sm"><!----><!----><!---->Eliminar</button></a>
      </td>
    </tr>
    <tr>
      <td>titulo de doc.</td>
      <td>tipo de doc.</td>
      <td>categoria de doc.</td>
      <td>fecha</td>
      <td>
               <a> <button type="button" class="btn btn-warning btn-sm"><!----><!----><!---->Editar</button></a>
      
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
                </card>
            </div>
        </section>
           
    </div>
</template>
<script>
export default {};
</script>
<style>

</style>
