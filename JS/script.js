//> Vue

const { createApp }= Vue;
createApp({
data(){

return{
 ToDoList:[{ 
             testo:'Elden ring',
             done:false
 },
 
 {  
     testo:'sekiro' ,
     done:false
 },

 {  
    testo: 'persona 3 reload',
    done:false


 },
 {  
   testo: 'call of cthulu',
   done:false


},



{  
   testo: 'catherine full body',
   done:false


}



 

 ]





}












},

methods:{
   //< done
   completato: function(itemIndex){
   this.ToDoList[itemIndex].done= !this.ToDoList[itemIndex].done;
   console.log(this.ToDoList[itemIndex].done);
   
   
   },

   //$ remove
   cancella:function(GameIndex){
   
      this.ToDoList.splice(GameIndex,1);


   }
//!add










}









}).mount('#app')