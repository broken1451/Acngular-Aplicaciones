
// Promesas 

let promesa1 = new Promise ((resolve, rejet)=>{

   setTimeout(()=>{
      
      console.log('Promesa terminada');

      // si termina bien
         resolve();

      // si termina mal
         rejet()

   },1500);


});


console.log('paso 1');
// promesa1.then(la funcion resolver, la funcion reject);
promesa1.then( ()=> {
   console.warn('Ejecutame cuando la funcion termine bien'); 
}, ()=> {
   console.error('Ejecutame cuando la funcion termine mal'); 
}).catch( (error)=>{console.log(error)} );
console.log('paso 2');















