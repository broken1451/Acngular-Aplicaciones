
function getNombre() {
   return 'Adrian';
}

function getNombre1(nombre: string, apellido: string) {
    return nombre + apellido;
 }
 



let nombre: string = 'Juan';
let apellido: string = ' Perez';
let edad: number = 32;

let texto = `Hola, 
${nombre} 
${apellido} 
(${edad})`;

let texto1 = 'Hola,' + nombre + ' ' + apellido + ' (' + edad + ')'; 


let texto2 = `${1+2}`;
let texto3 = `${getNombre()}`;
let texto4 = `${getNombre1('hola mundo ', 'Perezzz')} ${getNombre1(nombre , apellido )}`;


console.log(texto);
console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);









