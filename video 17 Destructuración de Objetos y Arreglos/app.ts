
// Destrecturacion de Objetos

let avenger = { 
   nombre: 'Steve',
   clave: 'Capitan America',
   poder: 'Droga'
};


// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// no importa el orden
// let {nombre:alias, clave, poder} = avenger;
// console.log(alias, clave, poder);

let {nombre, clave, poder} = avenger;
console.log(nombre, clave, poder);


// Destrecturacion de Arreglos

let avengers:string[] = ['Thor', 'Steve', 'Tony'];

// let [thor, capi, ironman] = avengers; // es secuencial
// console.log(thor, capi, ironman);

let [, , ironman] = avengers; // es secuencial

console.log(ironman);























