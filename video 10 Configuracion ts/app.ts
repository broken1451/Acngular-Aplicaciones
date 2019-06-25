function saludar(nombre:any) {
    console.log('Hola', nombre.toUpperCase());
}
var wolverine = {
    nombre: 'Logan',
    equipo: 'Xmens'
};
// modo observador de ts
    // tsc nombreArchivo.ts -w
    // tsc -init 
    // tsc

// saludar(wolverine.nombre);
saludar(wolverine.nombre);
saludar(wolverine.equipo);
