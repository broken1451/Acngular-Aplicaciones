
// decoradores

function consola(constructor:Function) {
   console.log('El constructo es: ', constructor);
}



// tsc --experimentalDecorators


@consola
class Villano {
  
   // public nombre:string = 'AntMan';
   // public nombre:string;
  
   constructor( public nombre:string){
      // this.nombre = nombre;
   }


}


