// Promesas 
var promesa1 = new Promise(function (resolve, rejet) {
    setTimeout(function () {
        console.log('Promesa terminada');
        // si termina bien
        resolve();
        // si termina mal
        rejet();
    }, 1500);
});
console.log('paso 1');
// promesa1.then(la funcion resolver, la funcion reject);
promesa1.then(function () {
    console.warn('Ejecutame cuando la funcion termine bien');
}, function () {
    console.error('Ejecutame cuando la funcion termine mal');
})["catch"](function (error) { console.log(error); });
console.log('paso 2');
