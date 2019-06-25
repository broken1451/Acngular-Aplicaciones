function getNombre() {
    return 'Adrian';
}
function getNombre1(nombre, apellido) {
    return nombre + apellido;
}
var nombre = 'Juan';
var apellido = ' Perez';
var edad = 32;
var texto = "Hola, \n" + nombre + " \n" + apellido + " \n(" + edad + ")";
var texto1 = 'Hola,' + nombre + ' ' + apellido + ' (' + edad + ')';
var texto2 = "" + (1 + 2);
var texto3 = "" + getNombre();
var texto4 = getNombre1('hola mundo ', 'Perezzz') + " " + getNombre1(nombre, apellido);
console.log(texto);
console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);
