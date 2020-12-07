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
            <div class="row justify-content-center mt-0">
              
                 <div class="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-gray pb-5"
                          body-classes="px-lg-7 py-lg-5"
                          class="border-0">
                         <template>
                             <div class="text-center text-muted mb-4">
                                <small>Vista Previa del documento {{this.$route.params.id}}</small>
                            </div>
                             <div class="text-center text-muted mb-4">
                              <p v-html="body.contenido"></p>
                            </div>
                        </template>
                        <template>
                            <a> <button type="button" class="btn btn-warning btn-sm" @click="DocTratamient"><!----><!----><!---->Imprimir</button></a>
                    
                        </template>
                    </card>
                </div>
            </div>
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
      created() {
      this.getEditMydoc();
  },
  data(){
           return{
               body:[],
               tags:[],
               tags:{
                    text:'',
                   input:'',
                   checkB:'',
                   img:''
               },
               controls:{
                   text:'',
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
         
           },
            async  getEditMydoc(){
           try{
            let response = await content.getEditMydoc(this.$route.params.id);
            this.body = response.data.data;
              this.tags = response.data.etiquetas;
           }catch (error){
              console.log(error);

           }
        },

       }
};


</script>
<style>
</style>
