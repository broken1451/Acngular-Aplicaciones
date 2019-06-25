function saludar(nombre) {
    console.log('Hola', nombre);
}
var wolverine = {
    nombre: 'Logan',
    equipo: 'Xmens'
};
// modo observador de ts
// tsc nombreArchivo.ts -w
// saludar(wolverine.nombre);
saludar(wolverine.nombre);
saludar(wolverine.equipo);
