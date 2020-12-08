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
              
                 <div class="col-lg-12">
                    <card type="secondary" shadow
                          header-classes="bg-gray pb-5"
                          body-classes="px-lg-10 py-lg-10"
                          class="border-0 text-center">
                         <template>
                        <div class="pb-2 ">
                          <div class="row col-lg-12">
                              
                              <div class="col-md-3 "> 
                             <span class="badge badge-primary">Nombre del documento:</span>
                             </div> 
                             

                              <div class="col-md-8" >
                               <u>{{this.body.titulo}}</u>
                              </div>
                              <div class="col-md-1 pt-2" >
                              <a> <button type="button" class="btn btn-danger btn-sm" @click="$router.push('/home')"><!----><!----><!---->Cerrar </button></a>
                              </div>
                              
                          </div>
                          <div class="row col-lg-12">
                              <div class="col-md-3"> 
                           <span class="badge badge-primary">Descripcion del documento:</span>
                             </div>
                             

                              <div class="col-md-8" >
                               <u>{{this.body.descripcion}}</u>
                              </div>
                              <div class="col-md-1 pt-2" >
                               <a> <button type="button" class="btn btn-success btn-sm" @click="DocTratamient"><!----><!----><!---->Guardar</button></a>
                              </div>
                              
                          </div>
                          
                            <div class="row col-lg-12">
                              <div class="col-md-2"> 
                           <span class="badge badge-primary">Creado el:</span>
                             </div>
                             

                              <div class="col-md-4" >
                               <u>{{this.body.created_at}}</u>
                              </div>
                                 <div class="col-md-2"> 
                           <span class="badge badge-primary">Editado el:</span>
                             </div>
                              <div class="col-md-4" >
                               <u>{{this.body.updated_at}}</u>
                              </div>
                              
                          </div>
                        </div> 
                           
                           <div class="col-lg-12 marco" >
                          
                              <div class="doc col-lg-10" v-html="this.docTrated"></div>
                         
                           </div>
                    
                        </template>
                        <template>
                            <a> <button type="button" class="btn btn-warning btn-sm" @click="DocTratamient"><!----><!----><!---->Procesar</button></a>
                    
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
               docTrated:'',
               tagOptions:'',
               msg:'hola',
              
               inicio:0,
               fin:'',
               tag:'',

               tags:{
                    text:'',
                   input:'',
                   checkB:'',
                   img:''
               },
               controls:{
                   text:' <img src="img/brand/icono.png" class="mg-fluid " x style="width: 400px">',
                   input:'<input type="text" value="XXX"style="border:1"/>',
                   radioB:'<input type="radio" id="huey" name="drone" value="huey">',
                   checkB:'<input type="checkbox" id="cbox1" value="first_checkbox">',
                   img:'<img src="img/brand/icono.png" class="mg-fluid " style="width: 400px">'


               }
           }
          
       },
       methods:{
           DocTratamient: function(){
               let original= this.docTrated;
                let re =/###/g;
                let sub="###";
               
               console.log(original.length);
                 
                    this.inicio=original.indexOf(sub,this.inicio)
                     this.fin=original.indexOf(sub,this.inicio+3)     
                          this.tagOptions=original.substring(this.inicio+3,this.fin);
                    console.log(this.inicio + "hasta" + this.fin );
                     console.log(this.tagOptions );
                    let tagWithVal= this.controls.input.replace('XXX',this.tags[0].valor)

                       let result=original.replace('###'+this.tagOptions+'###',tagWithVal)
            this.inicio=this.fin+3;
            this.docTrated=result;
            console.log(result.length);
           },


            async  getEditMydoc(){
           try{
            let response = await content.getEditMydoc(this.$route.params.id);
            this.body = response.data.data;
              this.tags = response.data.etiquetas;
              this.docTrated=this.body.contenido;
           }catch (error){
              console.log(error);

           }
        },

       }
};


</script>
<style>
.doc{
border: rgb(0, 0, 0) 1px solid;
margin:0px auto;
border-radius: 10px;
background-color: rgb(255, 255, 255);

}
.marco{
    border: rgb(135, 38, 38) 1px solid;
    background-color: rgb(196, 196, 196);
    border-radius: 10px;
}
</style>
