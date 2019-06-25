// Destrecturacion de Objetos
var avenger = {
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
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
// Destrecturacion de Arreglos
var avengers = ['Thor', 'Steve', 'Tony'];
// let [thor, capi, ironman] = avengers; // es secuencial
// console.log(thor, capi, ironman);
var ironman = avengers[2]; // es secuencial
console.log(ironman);
