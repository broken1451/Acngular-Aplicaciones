function enviarMision(xmen) {
    console.log('Enviando a: ' + xmen.nombre);
}
function enviarAcuartel(xmen) {
    console.log('Enviando al cuartel: ' + xmen.nombre);
}
var wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneracion'
};
enviarMision(wolverine);
enviarAcuartel(wolverine);
