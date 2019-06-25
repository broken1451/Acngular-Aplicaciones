// Funciones de flecha
var miFuncion = function (a) {
    return a;
};
var miFuncion1 = function (a) {
    return a;
};
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion3 = function (a, b) {
    return a + b;
};
var miFuncion4 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion5 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// let nombre='pesdsadasdasdas';
var hulk = {
    nombre: 'Hulk',
    // smash: function() {
    // }
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + ' SMASH');
        }, 1500);
    }
};
console.log('el valor de mifuncion normal es: ', miFuncion('Hola'));
console.log('el valor de mifuncion1 flecha es: ', miFuncion1(24));
console.log('el valor de mifuncion2 normal es: ', miFuncion2(24, 5));
console.log('el valor de mifuncion3 flecha es: ', miFuncion3(50, 5));
console.log('el valor de mifuncion4 normal es: ', miFuncion4('pepito'));
console.log('el valor de mifuncion5 flecha es: ', miFuncion5('perez'));
hulk.smash();
