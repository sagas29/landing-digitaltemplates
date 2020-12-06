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
                        
                                <p v-html="body"></p>
                        </template>
                        <template>
                            <a> <button type="button" class="btn btn-warning btn-sm"@click="DocTratamient"><!----><!----><!---->Imprimir</button></a>
                    
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
                   text:'<figure class=\"table\"><table><tbody><tr><td><p style=\"text-align:center;\"><i><strong>MODELO DE SOLICITUD DE LEGALIZACIÓN DE LIBROS</strong></i></p><p style=\"text-align:center;\"><i><strong>REGISTRO DE COMERCIO</strong></i></p></td></tr></tbody></table></figure><h2> </h2><h2>SEÑOR REGISTRADOR DE COMERCIO</h2><p><strong>PRESENTE.</strong></p><p> </p><p> </p><p>Yo, ________________________________mayor de edad, del domicilio de________________</p><p>Con DUI Nº___________________________, actuando en calidad de Representante Legal de la Sociedad_______________________________________________________________________</p><p>Inscrita al Nº_________Del Libro __________del Registro de Sociedades, con Credencial inscrita al Nº_________Del Libro___________</p><p>Por este medio solicito la Legalización de los libros que se detallan a continuación:</p><p>DETALLE DE LIBROS</p><p> </p><p>1.-_________________________________________________  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total de hojas___________</p><p>2.-_________________________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total de hojas___________</p><p>3.-_________________________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total de hojas___________</p><p>4.-_________________________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total de hojas___________</p><p>5.-_________________________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total de hojas___________</p><p> </p><p>Estos Libros servirán para desarrollar el Sistema de Control Interno de la Sociedad__________________________________________________________________</p><p>Para tal efecto declaro la siguiente información: Matrícula de Empresa Nº______________</p><p>NIT____________________________, Dirección_________________________________</p><p>Teléfono:____________________________.</p><p>Autorizo a :________________________________________________________________</p><p>Para que retire los libros y la documentación que se devuelva.</p><p> </p><p>San Salvador, a los_________________ del mes de____________del año____________</p><p> </p><p>Firma:____________________________</p><p>Representante Legal</p><p> </p><h3>NOTA: De no presentarse personalmente, debe legalizarse la firma por un Notario</h3>',
                   input:'<input type="text" style="border:0"/>',
                   radioB:'<input type="radio" id="huey" name="drone" value="huey">',
                   checkB:'<input type="checkbox" id="cbox1" value="first_checkbox">',
                   img:'<img src="img/brand/icono.png" class="mg-fluid " style="width: 400px">'


               }
           }
          
       },
       methods:{
           DocTratamient: function(){
               let original= this.controls.text;
               let i=0;
                 while (original.toString().indexOf('texto') != -1){
                    original=original.replace('texto',this.controls.input)
                   i++;
                 }
                    console.log(i);
                          console.log(original);
           // this.body=original;
           }

       }
};


</script>
<style>
</style>
