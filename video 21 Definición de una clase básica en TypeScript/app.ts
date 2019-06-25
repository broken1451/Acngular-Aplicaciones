
// Clases

class Avenger {
  
   // public nombre:string = 'AntMan';
   public nombre:string;
   public equipo:string;
   public nombreReal:string;
   public puedePelear:boolean;
   public peleasGanadas:number;

   constructor(nombre:string, equipo:string,nombreReal:string){
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
   }


}

let antman:Avenger = new Avenger('AntMan', 'Cap', 'Scoot Land');

console.log(antman);

