
// Funciones de flecha

let miFuncion = function (a) {
   return a;
}


let miFuncion1 = (a) => {
   return a;
};


let miFuncion2 = function (a: number, b:number) {
   return a + b;
}

let miFuncion3 =  (a: number, b:number) => {
   return a + b;
}

let miFuncion4 =  function (nombre:string){
   nombre = nombre.toUpperCase();
   return nombre;
}

let miFuncion5 = (nombre:string) => {
   nombre = nombre.toUpperCase();
   return nombre;
}


// let nombre='pesdsadasdasdas';
let hulk = {
   nombre: 'Hulk',
   // smash: function() {
   // }
   smash(){
      setTimeout(  () => {
         console.log(this.nombre + ' SMASH');
      },1500);
   }   
};

console.log('el valor de mifuncion normal es: ',miFuncion('Hola'));
console.log('el valor de mifuncion1 flecha es: ',miFuncion1(24));
console.log('el valor de mifuncion2 normal es: ',miFuncion2(24, 5));
console.log('el valor de mifuncion3 flecha es: ',miFuncion3(50, 5));
console.log('el valor de mifuncion4 normal es: ',miFuncion4('pepito'));
console.log('el valor de mifuncion5 flecha es: ',miFuncion5('perez'));
hulk.smash();


























