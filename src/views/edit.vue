<template>
    <section class="col-lg-12  section-shaped my-1 pt--200">
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
        
            <div class="row  justify-content-center pt-300 " >
             
                 <div class="col-lg-11">
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
                              <a> <button type="button" class="btn btn-danger btn-md" @click="$router.push('/home')"><!----><!----><!---->Cerrar </button></a>
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
                               <a> <button type="button" class="btn btn-primary btn-md" @click="DocTratamient"><!----><!----><!---->Editar</button></a>
                              </div>
                              
                              
                          </div>
                          
                            <div class="row col-lg-12">
                              <div class="col-md-2"> 
                           <span class="badge badge-primary">Creado el:</span>
                             </div>
                             

                              <div class="col-md-4" >
                               <u>{{this.body.created_at}}</u>
                              </div>
                              <!--
                                 <div class="col-md-2"> 
                                 <span class="badge badge-primary">Editado el:</span>
                             </div>
                              <div class="col-md-3" >
                               <u>{{this.body.updated_at}}</u>
                              </div>
                             -->
                              
                              
                          </div>
                         
                        </div> 
                           <div class="row">
                           <div class="col-lg-8 marco" >
                          
                              <div id="divToPrint" class="doc col-lg-9" align="justify" v-html="this.docTrated"></div>
                         
                           </div>
                           <div class=" col-lg-4" >
                        <card type="secondary" shadow
                          header-classes="bg-gray pb-1"
                          body-classes="px-lg-0 py-lg-100"
                          class="  border-0 text-center">

                           <div class="row col-lg-12 text-center mt-2" v-for="(success,indice) in success">
                               
                                <base-alert type="success" class="col-lg-12" dismissible>
                                     <span class="alert-inner--icon"><i class="ni ni-support-16"></i></span>
                                     <span class="alert-inner--text"><strong>Genial!</strong> Datos actualizados !!!!!</span>
                                     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                         <span aria-hidden="true">&times;</span>
                                    </button>
                                 </base-alert>
                            </div>

                      
                        <div  v-for="(input,indice) in inputs" >
                                <span class="badge badge-primary">{{tags[indice].nombre}}</span>
                               <base-input alternative
                                            class="mb-10"
                                           v-model='inputs[indice].valor'
                                            v-on:keyup="DocTratamient">
                                       
                                        </base-input>
                              
                        </div>
                         <div class=" row col-lg-12  " v-show="visible">

                                <div class="col-md-8">
                                <button type="button" class="btn btn-success btn-md" @click="DocActuSend"><!----><!----><!---->Guardar datos</button>
                                </div>
                               
                                <div class=" col-md-4">
                                <button type="button" value="print" class="btn btn-warning btn-md" @click="PrintDiv"><!----><!----><!---->Imprimir</button>
                                </div>

                        </div>
                               
                              

                        
                    </card>
                </div>
                           </div>
                        </template>
                      
                    </card>
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
     console.log("created") ;    
      
  },
  mounted(){
       //this.DocTratamient()
    },
  data(){
           return{
               visible:false,
               alerts:[],
               success:[],
               body:[],
               tags:[],
               inputs:[],
               docTrated:'',
               tagOptions:'',
               tagValue:'',
               
               inicio:0,
               fin:0,
               inicio2:0,
               fin2:0,
               tag:'',
               coincidencias:0,
               
               controls:{
                   text:' <img src="img/brand/icono.png" class="mg-fluid " x style="width: 400px">',
                   input:'<input type="text" value="XXX"style="border:0; width: 210px; "/>',
                   radioB:'<input type="radio" id="huey" name="drone" value="huey">',
                   checkB:'<input type="checkbox" id="cbox1" value="first_checkbox">',
                   img:'<img src="img/brand/icono.png" class="mg-fluid " style="width: 400px">'


               }
           }
          
       },
       methods:{
           DocTratamient: function(){
               let re =/###/g;
                let sub="###";
                let original;
                this.inputs=this.tags;
                 this.docTrated=this.body.contenido;
              
        try{
               var count = (this.body.contenido.match(re) || []).length;
                    console.log(count);
               for(var i = 0; i < count/2; i++) {

                     let original= this.docTrated;
	           
                    this.inicio=original.indexOf(sub,this.inicio)
                     this.fin=original.indexOf(sub,this.inicio+2) 

                          this.tagOptions=original.substring(this.inicio+3,this.fin);
                  

                    let tagWithVal= this.controls.input.replace('XXX',this.inputs[i].valor)

                       let result=original.replace('###'+this.tagOptions+'###',tagWithVal)

            this.inicio=this.fin+3;
            this.docTrated=result;

            //console.log(result.length);

             }
             this.inicio=0
             this.fin=0;
             this.visible=true;

           }catch(error){
            this.alerts.push(error);
           }
           },
                 async DocActuSend (){
            try{
            await content.registerDocActu(this.body.id_documento,this.body.titulo,this.body.descripcion,this.body.contenido,this.inputs);
              this.success.push("ok");
            }catch (error){
                console.log(error);
                 this.alerts.push(error);
                this.visible=true;
            }

        
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
          PrintDiv: function() {    
       var divToPrint = document.getElementById('divToPrint');
       var popupWin = window.open('', '_blank', 'width=600,height=800');
       popupWin.document.open();
       popupWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</html>');
        popupWin.document.close();
            }
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
.side{
  height:100%;
background-color: rgb(196, 196, 196);  
  border: rgb(135, 38, 38) 1px solid; 
}
</style>
